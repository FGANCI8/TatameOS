import fs from 'fs';
import path from 'path';

const rootPath = 'c:/Projeto de jiu-jitsu';
const srcPath = path.join(rootPath, 'src');
const appPath = path.join(srcPath, 'app');
const componentsPath = path.join(srcPath, 'components');
const modulesPath = path.join(srcPath, 'modules');
const servicesPath = path.join(srcPath, 'services');
const repositoriesPath = path.join(srcPath, 'repositories');
const libPath = path.join(srcPath, 'lib');
const stylesPath = path.join(srcPath, 'styles');
const hooksPath = path.join(srcPath, 'hooks');

const uiDirsToMigrate = [];

// 1. Audit root folders
const files = fs.readdirSync(rootPath, { withFileTypes: true });

for (const file of files) {
  if (file.isDirectory() && file.name !== 'node_modules' && file.name !== 'src' && !file.name.startsWith('.')) {
    const codeHtmlPath = path.join(rootPath, file.name, 'code.html');
    if (fs.existsSync(codeHtmlPath)) {
      uiDirsToMigrate.push(file.name);
    }
  }
}

console.log(`Audited: Found ${uiDirsToMigrate.length} Stitch UI folders to migrate.`);

// 2. Create architectural folders
const foldersToCreate = [
  appPath, componentsPath, modulesPath, servicesPath,
  repositoriesPath, libPath, stylesPath, hooksPath
];

foldersToCreate.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

// Domain modules to create
const domains = ['aluno', 'treino', 'tecnica', 'campeonato', 'falhas'];
domains.forEach(domain => {
  const domainPath = path.join(modulesPath, domain);
  if (!fs.existsSync(domainPath)) fs.mkdirSync(domainPath, { recursive: true });
  if (!fs.existsSync(path.join(domainPath, 'services'))) fs.mkdirSync(path.join(domainPath, 'services'), { recursive: true });
  if (!fs.existsSync(path.join(domainPath, 'repositories'))) fs.mkdirSync(path.join(domainPath, 'repositories'), { recursive: true });
  
  // Create mock files
  fs.writeFileSync(path.join(domainPath, 'services', `${domain}Service.ts`), `// ${domain} Service\nexport class ${capitalize(domain)}Service {}\n`);
  fs.writeFileSync(path.join(domainPath, 'repositories', `${domain}Repository.ts`), `// ${domain} Repository Mock\nexport class ${capitalize(domain)}Repository {}\n`);
  fs.writeFileSync(path.join(domainPath, 'types.ts'), `// ${domain} Types\nexport interface I${capitalize(domain)} {}\n`);
});

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// 3. Migrate and Convert HTML to JSX
uiDirsToMigrate.forEach(dirName => {
  const oldPath = path.join(rootPath, dirName);
  const newScreenPath = path.join(appPath, dirName);
  
  if (!fs.existsSync(newScreenPath)) {
    fs.mkdirSync(newScreenPath, { recursive: true });
  }

  const htmlContent = fs.readFileSync(path.join(oldPath, 'code.html'), 'utf-8');
  
  // Simple extraction of <body> contents
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let jsxContent = bodyMatch ? bodyMatch[1] : htmlContent;

  // React JSX Replacements
  jsxContent = jsxContent
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    .replace(/disabled=""/g, 'disabled')
    .replace(/<img(.*?)>/g, (match) => {
      if (match.endsWith('/>')) return match;
      return match.replace(/>$/, ' />');
    })
    .replace(/<input(.*?)>/g, (match) => {
      if (match.endsWith('/>')) return match;
      return match.replace(/>$/, ' />');
    })
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    // inline style replace is tricky, we'll strip them for basic conversion or naive object wrap (often it's empty or unused in tailwind)
    .replace(/style="([^"]*)"/g, (match, p1) => {
        return `style={{ /* ${p1} */ }}`;
    });

  const componentName = capitalizeName(dirName);
  
  const componentCode = `import React from 'react';

export default function ${componentName}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

  fs.writeFileSync(path.join(newScreenPath, 'page.tsx'), componentCode);
  
  // Move screen.png if exists
  if (fs.existsSync(path.join(oldPath, 'screen.png'))) {
    fs.renameSync(path.join(oldPath, 'screen.png'), path.join(newScreenPath, 'screen.png'));
  }

  // Remove old dir
  fs.rmSync(oldPath, { recursive: true, force: true });
});

function capitalizeName(str) {
  return str.split('_').map(capitalize).join('');
}

// 4. Handle Firebase Setup
if (fs.existsSync(path.join(srcPath, 'firebase'))) {
  if (!fs.existsSync(path.join(libPath, 'firebase'))) {
    fs.mkdirSync(path.join(libPath, 'firebase'), { recursive: true });
  }
  
  // Read and fix client.ts
  const clientTsPath = path.join(srcPath, 'firebase', 'client.ts');
  if (fs.existsSync(clientTsPath)) {
    let clientContent = fs.readFileSync(clientTsPath, 'utf8');
    clientContent = clientContent.replace(/process\.env\.NEXT_PUBLIC_/g, 'import.meta.env.VITE_');
    fs.writeFileSync(path.join(libPath, 'firebase', 'client.ts'), clientContent);
  }
  
  // We'll move admin.ts to lib/firebase temporarily but it should be noted it doesn't belong purely in client.
  const adminTsPath = path.join(srcPath, 'firebase', 'admin.ts');
  if (fs.existsSync(adminTsPath)) {
    let adminContent = fs.readFileSync(adminTsPath, 'utf8');
    fs.writeFileSync(path.join(libPath, 'firebase', 'admin.ts'), adminContent);
  }

  // Delete old firebase folder
  fs.rmSync(path.join(srcPath, 'firebase'), { recursive: true, force: true });
}

console.log('Migration completed.');
