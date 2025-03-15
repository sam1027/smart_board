import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from 'router/Router';
import { Reset } from 'styled-reset';
import { useThemeStore } from 'modules/globalStore';
import {dark, light,  fontSizes, fontWeights, spaces } from 'lib/style/theme'

function App() {

  const { mode } = useThemeStore();
  const setMode = () => {
    if(mode === 'light'){
      return { 
        mode : light,
        fontSizes : fontSizes,
        fontWeights : fontWeights,
        spaces : spaces,
      }
    }else if(mode === 'dark'){
      return { 
        mode : dark,
        fontSizes : fontSizes,
        fontWeights : fontWeights,
        spaces : spaces,
      }
    }else {
      return { 
        mode : light,
        fontSizes : fontSizes,
        fontWeights : fontWeights,
        spaces : spaces,
      }
    }
  }

  return (
    <ThemeProvider theme={setMode}>
      <BrowserRouter>
        <Reset/>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
