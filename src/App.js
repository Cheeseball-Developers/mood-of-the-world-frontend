import './App.css';
import 'fontsource-roboto';
import { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'navigation/RouterConfig';
import { light, dark } from 'styles/muiTheme';
import AnimatedTitle from 'components/AnimatedTitle';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkState, setDarkState] = useState(false);

  setTimeout(() => { setShowSplash(false) }, 3000);

  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", darkState ? "dark" : "light");
  };


  return (
    <div style={{ overflow: 'hidden', scrollbarWidth: 'none' }}>
      <ThemeProvider theme={darkState ? dark() : light()}>
        <CssBaseline />
        {showSplash ? <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <AnimatedTitle />
        </div> :

          <BrowserRouter>
            <RouterConfig handleThemeChange={handleThemeChange} />
          </BrowserRouter>
        }
      </ThemeProvider>
    </div>
  );
}

export default App;
