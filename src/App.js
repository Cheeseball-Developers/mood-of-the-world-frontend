import './App.css';
import 'fontsource-roboto';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { ReactComponent as GithubIcon } from "./assets/images/github-icon.svg";
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'navigation/RouterConfig';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

function App() {
  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <div>
//           <ComposableMap>
//             <Geographies geography={geoUrl}>
//               {({ geographies }) =>
//                 geographies.map((geo) => (
//                   <Geography key={geo.rsmKey} geography={geo} />
//                 ))
//               }
//             </Geographies>
//           </ComposableMap>
//       </div>
//       <GithubIcon />
//     </div>
//   );
// }

export default App;
