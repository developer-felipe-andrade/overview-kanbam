import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Typography, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem 
} from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const KanbanOverview = () => {
  // Dados de exemplo para as sprints
  const sprints = [
    { id: 'sprint-1', name: 'Sprint 1', startDate: '01/11/2023', endDate: '15/11/2023' },
    { id: 'sprint-2', name: 'Sprint 2', startDate: '16/11/2023', endDate: '30/11/2023' },
    { id: 'sprint-3', name: 'Sprint 3', startDate: '01/12/2023', endDate: '15/12/2023' },
  ];

  // Estado para a sprint selecionada
  const [selectedSprint, setSelectedSprint] = useState(sprints[0].id);

  // Dados de exemplo para os contadores (poderiam vir de uma API baseada na sprint selecionada)
  const sprintData = {
    'sprint-1': {
      todo: 5,
      inProgress: 3,
      codeReview: 2,
      test: 1,
      done: 8
    },
    'sprint-2': {
      todo: 3,
      inProgress: 4,
      codeReview: 3,
      test: 2,
      done: 5
    },
    'sprint-3': {
      todo: 2,
      inProgress: 1,
      codeReview: 1,
      test: 0,
      done: 3
    }
  };

  const statusCounts = sprintData[selectedSprint];

  // Dados para o gráfico Burn Down
  const burnDownData = {
    chart: {
      type: 'line',
      height: 300
    },
    title: {
      text: 'Burn Down Chart',
      align: 'left'
    },
    xAxis: {
      categories: ['Sprint Start', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Sprint End']
    },
    yAxis: {
      title: {
        text: 'Tarefas Restantes'
      },
      min: 0
    },
    series: [{
      name: 'Ideal',
      data: [15, 12, 9, 6, 3, 0],
      color: '#ccc',
      dashStyle: 'Dash',
      marker: {
        enabled: false
      }
    }, {
      name: 'Atual',
      data: [15, 14, 12, 10, 8, 5],
      color: '#1976d2'
    }]
  };

  // Dados para o gráfico CFD (Cumulative Flow Diagram)
  const cfdData = {
    chart: {
      type: 'areaspline',
      height: 300
    },
    title: {
      text: 'Cumulative Flow Diagram (CFD)',
      align: 'left'
    },
    xAxis: {
      categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
    },
    yAxis: {
      title: {
        text: 'Número de Tarefas'
      },
      min: 0
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'A Fazer',
      data: [10, 8, 6, 5, 4, 3, 2],
      color: '#ff9800'
    }, {
      name: 'Em Progresso',
      data: [2, 3, 4, 4, 3, 2, 1],
      color: '#2196f3'
    }, {
      name: 'Revisão',
      data: [1, 2, 3, 3, 4, 5, 4],
      color: '#9c27b0'
    }, {
      name: 'Teste',
      data: [0, 1, 1, 2, 3, 4, 5],
      color: '#ff5722'
    }, {
      name: 'Concluído',
      data: [3, 5, 7, 9, 11, 13, 15],
      color: '#4caf50'
    }]
  };

  const statusCards = [
    { id: 'todo', label: 'A Fazer', count: statusCounts.todo, color: '#ff9800' },
    { id: 'inProgress', label: 'Em Progresso', count: statusCounts.inProgress, color: '#2196f3' },
    { id: 'codeReview', label: 'Revisão de Código', count: statusCounts.codeReview, color: '#9c27b0' },
    { id: 'test', label: 'Teste', count: statusCounts.test, color: '#ff5722' },
    { id: 'done', label: 'Concluído', count: statusCounts.done, color: '#4caf50' }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">
          Visão Geral do Quadro Kanban
        </Typography>
        
        {/* Seletor de Sprint */}
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel id="sprint-select-label">Selecionar Sprint</InputLabel>
          <Select
            labelId="sprint-select-label"
            id="sprint-select"
            value={selectedSprint}
            label="Selecionar Sprint"
            onChange={(e) => setSelectedSprint(e.target.value)}
            sx={{ minWidth: 250 }}
          >
            {sprints.map((sprint) => (
              <MenuItem key={sprint.id} value={sprint.id}>
                {sprint.name} ({sprint.startDate} - {sprint.endDate})
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
        <Typography variant="subtitle1">
          Período: {sprints.find(s => s.id === selectedSprint)?.startDate} - {sprints.find(s => s.id === selectedSprint)?.endDate}
        </Typography>
      </Box>

      {/* Cards de Status */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statusCards.map((status) => (
          <Grid item xs={12} sm={6} md={2.4} key={status.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderLeft: `4px solid ${status.color}`
              }}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {status.label}
                </Typography>
                <Typography variant="h4" component="div">
                  {status.count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Gráficos */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <HighchartsReact
                highcharts={Highcharts}
                options={burnDownData}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <HighchartsReact
                highcharts={Highcharts}
                options={cfdData}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default KanbanOverview;
