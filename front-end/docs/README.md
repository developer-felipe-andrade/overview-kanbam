# Documentação do Projeto Kanban Overview

Bem-vindo à documentação do projeto Kanban Overview. Este documento descreve a estrutura e os componentes do front-end da aplicação.

## Estrutura do Projeto

```
front-end/
├── public/           # Arquivos estáticos
├── src/
│   ├── assets/       # Recursos estáticos (imagens, ícones, etc.)
│   ├── components/   # Componentes React
│   │   └── KanbanOverview.jsx  # Componente principal da aplicação
│   ├── App.jsx       # Componente raiz da aplicação
│   ├── main.jsx      # Ponto de entrada da aplicação
│   └── setupTests.js # Configuração dos testes
├── docs/             # Documentação do projeto
└── ...
```

## Componentes

### 1. App.jsx
O componente raiz da aplicação que configura o tema e renderiza a estrutura básica.

### 2. KanbanOverview.jsx
Componente principal que exibe:
- Seletor de sprint
- Cards de status
- Gráficos de Burn Down e CFD

## Como Executar

1. Instale as dependências:
```bash
bun install
```

2. Inicie o servidor de desenvolvimento:
```bash
bun run dev
```

3. Execute os testes:
```bash
bun test
```

## Tecnologias Utilizadas

- React
- Material-UI
- Highcharts
- Vite
- Jest e Testing Library para testes
