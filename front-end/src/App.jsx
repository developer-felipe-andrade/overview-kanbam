import React from 'react';
import { 
  AppBar, 
  Box, 
  CssBaseline, 
  ThemeProvider, 
  Typography,
  createTheme,
  Container
} from '@mui/material';
import KanbanOverview from './components/KanbanOverview';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" component="div">
              Visão Geral do Quadro Kanban
            </Typography>
          </Box>
        </AppBar>
        
        <Container maxWidth="xl">
          <KanbanOverview />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
