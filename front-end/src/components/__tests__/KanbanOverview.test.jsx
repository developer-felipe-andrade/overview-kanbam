import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import KanbanOverview from '../KanbanOverview';
import '@testing-library/jest-dom';

describe('KanbanOverview', () => {
  // Dados de teste
  const sprints = [
    { id: 'sprint-1', name: 'Sprint 1', startDate: '01/11/2023', endDate: '15/11/2023' },
    { id: 'sprint-2', name: 'Sprint 2', startDate: '16/11/2023', endDate: '30/11/2023' },
  ];

  const renderComponent = () => {
    return render(<KanbanOverview />);
  };

  test('renderiza o título da página', () => {
    renderComponent();
    expect(screen.getByText('Visão Geral do Quadro Kanban')).toBeInTheDocument();
  });

  test('renderiza o seletor de sprint', () => {
    renderComponent();
    expect(screen.getByLabelText('Selecionar Sprint')).toBeInTheDocument();
  });

  test('exibe o período da sprint selecionada', () => {
    renderComponent();
    expect(screen.getByText(/Período:/)).toBeInTheDocument();
    expect(screen.getByText('01/11/2023 - 15/11/2023')).toBeInTheDocument();
  });

  test('renderiza os cards de status', () => {
    renderComponent();
    
    const statusCards = [
      'A Fazer',
      'Em Progresso',
      'Revisão de Código',
      'Teste',
      'Concluído'
    ];

    statusCards.forEach(status => {
      expect(screen.getByText(status)).toBeInTheDocument();
    });
  });

  test('exibe os contadores corretos para a sprint selecionada', () => {
    renderComponent();
    
    // Verifica os contadores da primeira sprint
    expect(screen.getByText('5')).toBeInTheDocument(); // A Fazer
    expect(screen.getByText('3')).toBeInTheDocument(); // Em Progresso
    expect(screen.getByText('2')).toBeInTheDocument(); // Revisão de Código
    expect(screen.getByText('1')).toBeInTheDocument(); // Teste
    expect(screen.getByText('8')).toBeInTheDocument(); // Concluído
  });

  test('muda a sprint selecionada', () => {
    renderComponent();
    
    // Abre o seletor de sprint
    const select = screen.getByRole('button', { name: /selecionar sprint/i });
    fireEvent.mouseDown(select);
    
    // Seleciona a segunda sprint
    const sprint2 = screen.getByRole('option', { name: /sprint 2/i });
    fireEvent.click(sprint2);
    
    // Verifica se o período foi atualizado
    expect(screen.getByText('16/11/2023 - 30/11/2023')).toBeInTheDocument();
  });

  test('renderiza os gráficos', () => {
    renderComponent();
    
    // Verifica se os gráficos estão sendo renderizados
    const charts = screen.getAllByTestId('highcharts-mock');
    expect(charts).toHaveLength(2); // Burn Down e CFD
    
    // Verifica os títulos dos gráficos
    expect(screen.getByText('Burn Down Chart')).toBeInTheDocument();
    expect(screen.getByText('Cumulative Flow Diagram (CFD)')).toBeInTheDocument();
  });

  test('atualiza os contadores ao mudar de sprint', () => {
    renderComponent();
    
    // Verifica os contadores iniciais
    expect(screen.getByText('5')).toBeInTheDocument(); // A Fazer
    
    // Abre o seletor de sprint
    const select = screen.getByRole('button', { name: /selecionar sprint/i });
    fireEvent.mouseDown(select);
    
    // Seleciona a segunda sprint
    const sprint2 = screen.getByRole('option', { name: /sprint 2/i });
    fireEvent.click(sprint2);
    
    // Verifica se os contadores foram atualizados para a segunda sprint
    expect(screen.getByText('3')).toBeInTheDocument(); // A Fazer da sprint 2
  });
});
