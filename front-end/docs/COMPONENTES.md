# Documentação dos Componentes

## KanbanOverview

### Visão Geral
O componente `KanbanOverview` é responsável por exibir a visão geral do quadro Kanban, incluindo os contadores de status e os gráficos de acompanhamento.

### Estrutura
```jsx
<KanbanOverview>
  {/* Cabeçalho */}
  {/* Seletor de Sprint */}
  {/* Cards de Status */}
  {/* Gráficos */}
</KanbanOverview>
```

### Props
Nenhuma prop é necessária, pois o componente gerencia seu próprio estado.

### Estado
- `selectedSprint`: Armazena o ID da sprint atualmente selecionada
- Os dados das sprints são estáticos, mas podem ser facilmente conectados a uma API

### Funcionalidades
1. **Seleção de Sprint**
   - Permite ao usuário selecionar qual sprint visualizar
   - Atualiza automaticamente os dados exibidos

2. **Cards de Status**
   - Exibe contadores para cada coluna do Kanban
   - Cores diferentes para cada status
   - Layout responsivo

3. **Gráficos**
   - **Burn Down Chart**: Mostra o progresso da sprint em relação ao ideal
   - **CFD (Cumulative Flow Diagram)**: Mostra o fluxo de trabalho ao longo do tempo

### Dados
Os dados são estruturados da seguinte forma:

```javascript
{
  'sprint-1': {
    todo: 5,
    inProgress: 3,
    codeReview: 2,
    test: 1,
    done: 8
  },
  // ... outras sprints
}
```

## App

### Visão Geral
Componente raiz da aplicação que configura o tema e renderiza a estrutura básica.

### Estrutura
```jsx
<ThemeProvider>
  <CssBaseline />
  <AppBar />
  <Container>
    <KanbanOverview />
  </Container>
</ThemeProvider>
```

### Tema
- Cores primária e secundária definidas
- Tipografia configurada para usar Roboto

## Testes

### Estrutura de Testes
Os testes estão organizados em:
- Testes de renderização
- Testes de interação
- Testes de estado

### Como Executar os Testes
```bash
npm test
```

### Cobertura de Testes
Para gerar relatório de cobertura:
```bash
npm run test:coverage
```

## Estilização

### Tailwind CSS
- Configurado para estilização utilitária
- Personalização de temas e cores

### Material-UI
- Componentes estilizados com `sx` prop
- Tema personalizado

## Dependências Externas

### Principais Bibliotecas
- `@mui/material`: Componentes de UI
- `highcharts-react-official`: Gráficos interativos
- `react`: Biblioteca principal
- `react-dom`: Renderização do React no navegador

### Dependências de Desenvolvimento
- `@testing-library/react`: Utilitários para testes
- `jest`: Framework de testes
- `vite`: Bundler e servidor de desenvolvimento
