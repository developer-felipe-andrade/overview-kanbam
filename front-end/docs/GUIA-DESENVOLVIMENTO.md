# Guia de Desenvolvimento

Este guia fornece informações para desenvolvedores que desejam contribuir com o projeto.

## Pré-requisitos

- Node.js 16.x ou superior
- npm 8.x ou superior
- Git

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   cd front-end
   ```

2. Instale as dependências:
   ```bash
   bun install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   bun run dev
   ```

## Estrutura de Pastas

```
src/
├── components/       # Componentes React
├── assets/          # Recursos estáticos
├── styles/          # Estilos globais
└── utils/           # Utilitários e helpers
```

## Convenções de Código

### Nomenclatura
- Componentes: `PascalCase` (ex: `KanbanOverview.jsx`)
- Arquivos de estilo: `kebab-case` (ex: `kanban-overview.module.css`)
- Pastas: `kebab-case`

### Estilo de Código
- Use ESLint e Prettier para formatação
- Siga as regras do Airbnb JavaScript Style Guide
- Comente o código quando necessário

## Testes

### Executando Testes
```bash
# Todos os testes
bun test

# Apenas testes modificados (watch mode)
bun test --watch

# Gerar relatório de cobertura
bun test --coverage
```

### Escrevendo Testes
- Teste todos os componentes novos
- Mantenha uma cobertura de testes acima de 80%
- Use `@testing-library/react` para testes de integração

## Pull Requests

1. Crie uma branch descritiva:
   ```bash
   git checkout -b feature/nome-da-feature
   ```

2. Faça commit das suas alterações:
   ```bash
   git commit -m "feat: adiciona novo recurso"
   ```

3. Envie as alterações:
   ```bash
   git push origin feature/nome-da-feature
   ```

4. Abra um Pull Request no GitHub

## Padrão de Commits

Use o Conventional Commits:
- `feat`: Nova funcionalidade
- `fix`: Correção de bugs
- `docs`: Atualização de documentação
- `style`: Formatação de código
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Atualização de dependências

Exemplo:
```
feat: adiciona seletor de sprint
docs: atualiza documentação dos componentes
fix: corrige erro ao carregar dados da sprint
```

## Dicas para Desenvolvimento

### Componentes
- Mantenha os componentes pequenos e focados
- Use props para comunicação entre componentes
- Evite lógica complexa nos componentes

### Estilização
- Use Material-UI para componentes de UI
- Use Tailwind CSS para estilização utilitária
- Mantenha os estilos próximos aos componentes

### Performance
- Use `React.memo` para otimização
- Evite re-renders desnecessários
- Use `useCallback` e `useMemo` quando apropriado

## Dúvidas?

Se você tiver alguma dúvida, por favor, abra uma issue no repositório.
