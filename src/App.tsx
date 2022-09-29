import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './assets/App.css';
import "@mui/styles";
import { ThemeProvider,createTheme  } from '@mui/material/styles';

import Footer from './common/Footer';
import Header from './common/Header';


import Routes from './routes/index';


import SnakAlert from './components/SnakAlert';
import ConfirmationDialog from './components/ConfirmationDialog';
 

let theme = createTheme({
  spacing: 4, 
  
});

function App() {  

  return (
    <div className="app">

        <ThemeProvider theme={theme}>
            <Router>
              <Header/>
              <Routes/>
              <Footer/>
            </Router>
        <SnakAlert/>
        <ConfirmationDialog/>
        </ThemeProvider>

    </div>
  );
}

export default App;
