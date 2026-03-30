# Fase 9.4 - Testes de Stress de Isolamento Multi-Tenant

## 1. Resumo Executivo dos Cenários de Teste

Objetivo desta etapa: provar, no Firebase Emulator com JDK 21, que nenhum usuário consegue ler, listar, criar ou atualizar dados fora do próprio `tenantId`.

Critério binário:
- **Passa**: a operação cruzada retorna `Permission denied`.
- **Não passa**: qualquer leitura, listagem ou escrita cross-tenant é aceita.

Escopo de validação:
- `alunos`
- `treinos`
- `falhas`
- `lutas`
- `feedbacks`
- `campeonatos`
- `tecnicas`

Condição de segurança:
- usuários de tenants diferentes devem estar autenticados com `custom claim tenantId` distinto
- o teste precisa ser executado contra o Emulator, nunca contra produção

## 2. Matriz de Testes

| Cenário | Ator | Alvo | Resultado Esperado |
|---|---|---|---|
| MT-01 | Aluno A | GET de treino do Aluno B na mesma academia | Negado se o documento não for do próprio `uid` |
| MT-02 | Aluno A | GET de treino de Aluno C em outra academia | Negado com `Permission denied` |
| MT-03 | Aluno A | CREATE de treino com `tenantId` da Academia B | Negado com `Permission denied` |
| MT-04 | Professor da Academia A | LIST de alunos da Academia B | Negado com `Permission denied` |
| MT-05 | Qualquer ator autenticado | UPDATE trocando `tenantId` original por outro tenant | Negado com `Permission denied` |

Observação importante:
- para leitura dentro do mesmo tenant, o resultado esperado varia conforme a regra de negócio do documento
- o foco deste teste é comprovar que **cruzamento de tenant não passa**

## 3. Instruções de Execução no Emulador

### 3.1 Pré-requisitos

1. Instalar e ativar o JDK 21.
2. Confirmar a versão:
   ```bash
   java -version
   ```
3. Subir Auth e Firestore Emulator:
   ```bash
   firebase emulators:start --only auth,firestore
   ```
4. Abrir o Emulator UI:
   ```bash
   http://127.0.0.1:4000
   ```

### 3.2 Preparação dos usuários

Criar ou importar pelo menos estes usuários no Auth Emulator:
- `aluno-a@exemplo.com` com `tenantId = tenant-a`
- `aluno-b@exemplo.com` com `tenantId = tenant-a`
- `aluno-c@exemplo.com` com `tenantId = tenant-b`
- `prof-a@exemplo.com` com `role = professor` e `tenantId = tenant-a`

Se o projeto já possuir script de provisionamento local para claims, usar esse fluxo. Caso contrário, ajustar manualmente as claims no Emulator UI antes dos testes.

### 3.3 Dados base no Firestore Emulator

Inserir documentos de apoio com `tenantId` explícito:
- 1 treino do `aluno-b` em `tenant-a`
- 1 treino do `aluno-c` em `tenant-b`
- 1 documento em cada coleção (`alunos`, `treinos`, `falhas`, `lutas`, `feedbacks`, `campeonatos`, `tecnicas`) para `tenant-a`
- 1 documento equivalente para `tenant-b`

### 3.4 Execução por cenário

#### MT-01 - Aluno A tenta ler treino do Aluno B na mesma academia

1. Autenticar como `aluno-a@exemplo.com`.
2. Obter o `docId` do treino do `aluno-b`.
3. Tentar ler o documento pela collection `treinos`.
4. Veredito:
   - se o doc for de outro aluno, a leitura deve ser negada
   - se a aplicação permitir leitura indevida, falha grave

#### MT-02 - Aluno A tenta ler treino do Aluno C em outra academia

1. Autenticar como `aluno-a@exemplo.com`.
2. Copiar o `docId` do treino do `aluno-c`.
3. Tentar `get` do documento.
4. Veredito:
   - **Passa** apenas se o Emulator retornar `Permission denied`

#### MT-03 - Aluno A tenta criar treino com `tenantId` da Academia B

1. Autenticar como `aluno-a@exemplo.com`.
2. Tentar criar um documento em `treinos` com:
   - `tenantId = tenant-b`
   - `alunoId = uid do aluno-a`
3. Veredito:
   - **Passa** se a escrita for negada

#### MT-04 - Professor da Academia A tenta listar alunos da Academia B

1. Autenticar como `prof-a@exemplo.com`.
2. Executar uma listagem na coleção `alunos`.
3. Tentar forçar um filtro ou leitura de documento usando `tenantId = tenant-b`.
4. Veredito:
   - **Passa** se nada de `tenant-b` for retornado
   - qualquer retorno cross-tenant é falha

#### MT-05 - Tentativa de update com troca de tenant

1. Autenticar como qualquer usuário válido do `tenant-a`.
2. Abrir um documento existente do `tenant-a`.
3. Tentar atualizar o payload alterando:
   - `tenantId = tenant-b`
4. Veredito:
   - **Passa** se o update for negado

### 3.5 Checklist manual por coleção

Repetir os cenários acima para:
- `alunos`
- `treinos`
- `falhas`
- `lutas`
- `feedbacks`
- `campeonatos`
- `tecnicas`

Regra prática:
- qualquer leitura ou escrita que atravesse `tenantId` deve falhar
- qualquer update que tente mudar `tenantId` deve falhar

## 4. Veredito Final sobre a Robustez do Isolamento

O isolamento multi-tenant pode ser considerado robusto apenas se todos os testes abaixo forem verdadeiros:
- leitura cross-tenant negada
- listagem cross-tenant negada
- create com `tenantId` adulterado negado
- update com troca de `tenantId` negado
- professor só enxerga o próprio tenant

Se qualquer cenário acima passar indevidamente, a Fase 9 não está aprovada para produção.
