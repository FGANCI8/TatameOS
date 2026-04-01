import { config as loadEnv } from 'dotenv';
import { activateYouTubeLibrary } from '../src/modules/tecnica/youtube-engine';

loadEnv();

async function main() {
  const report = await activateYouTubeLibrary();

  console.log(`YouTube library activation finished at ${report.generatedAt}.`);
  for (const category of report.categories) {
    console.log(
      `${category.categoryLabel}: accepted=${category.accepted.length}, rejected=${category.rejected.length}, pending=${category.pendingCount}`,
    );
  }

  if (report.persisted) {
    console.log(`Manifest: ${report.persisted.manifestPath}`);
    console.log(`Report: ${report.persisted.reportPath}`);
    console.log(`Category files: ${report.persisted.categoryFiles.join(', ')}`);
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : 'Unknown YouTube activation error';
  console.error(message);
  process.exitCode = 1;
});
