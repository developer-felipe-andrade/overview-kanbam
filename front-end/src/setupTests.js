import '@testing-library/jest-dom';

// Mock para o Highcharts
global.Highcharts = {
  chart: jest.fn(() => ({
    reflow: jest.fn(),
    destroy: jest.fn(),
  })),
  charts: [],
};

// Mock para o HighchartsReact
jest.mock('highcharts-react-official', () => {
  return function DummyChart() {
    return <div data-testid="highcharts-mock" />;
  };
});