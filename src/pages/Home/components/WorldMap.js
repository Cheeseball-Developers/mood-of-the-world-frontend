import React, { memo, useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import getCountryColor from 'utils/countryColor';

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const WorldMap = ({ sentiments, setCountryName, setCountry }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    console.log(sentiments);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {
            window.removeEventListener("resize", updateWidthAndHeight);
        };
    });

    return (
        <div>
            <ComposableMap height={height} width={width}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                data-tip={geo.properties.NAME}
                                geography={geo}
                                onMouseEnter={() => {
                                    const { NAME, POP_EST } = geo.properties;
                                    setCountryName(`${NAME} — ${rounded(POP_EST)}`);
                                    setCountry(`${geo.properties['ISO_A2']}`);
                                    ReactTooltip.rebuild();
                                }}
                                onMouseLeave={() => {
                                    setCountryName("");
                                    setCountry("");
                                }}
                                style={{
                                    default: {
                                        fill: geo.properties['ISO_A2'] in sentiments ? getCountryColor(sentiments[geo.properties['ISO_A2']]) : '#ADAA90',
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#F53",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#E42",
                                        outline: "none"
                                    }
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
}

export default memo(WorldMap);