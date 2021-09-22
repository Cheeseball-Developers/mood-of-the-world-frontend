import './App.css';
import 'fontsource-roboto';
import { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'navigation/RouterConfig';
import { light, dark } from 'styles/muiTheme';

function App() {
  const [darkState, setDarkState] = useState(false);

  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", darkState ? "dark" : "light");
  };


  return (
    <div style={{overflow: 'hidden', scrollbarWidth: 'none'}}>
      <ThemeProvider theme={darkState ? dark() : light()}>
        <CssBaseline />
        <BrowserRouter>
          <RouterConfig handleThemeChange={handleThemeChange} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
