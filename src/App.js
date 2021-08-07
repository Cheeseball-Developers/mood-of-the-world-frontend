import './App.css';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { ReactComponent as GithubIcon } from "./assets/images/github-icon.svg";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

function App() {
  return (
    <div className="App">
      <div>
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ComposableMap>
      </div>
      <GithubIcon />
    </div>
  );
}

export default App;
