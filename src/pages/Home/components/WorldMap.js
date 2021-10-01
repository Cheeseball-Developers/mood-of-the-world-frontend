import React, { memo, useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import { getCountryColor } from 'utils/countryColor';
import { isMobile } from 'react-device-detect';
import SentimentsPopup from './SentimentsPopup';

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

const WorldMap = ({ countriesData, setCountryName, setCountry }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCountryName, setSelectedCountryName] = useState(null);

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
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    data-tip={geo.properties.NAME}
                                    geography={geo}
                                    onClick={() => {
                                        if (isMobile) {
                                            if (geo.properties['ISO_A2'] in countriesData) {
                                                setSelectedCountryName(geo.properties['NAME']);
                                                setSelectedCountry(geo.properties['ISO_A2']); console.log(selectedCountry);
                                            }
                                        }
                                    }}
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
                                            fill: geo.properties['ISO_A2'] in countriesData ? getCountryColor(countriesData[geo.properties['ISO_A2']]['sentiments']) : '#ADAA90',
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
                </ZoomableGroup>
            </ComposableMap>
            {selectedCountry ? <SentimentsPopup countryName={selectedCountryName} countryData={countriesData[selectedCountry]} onExit={() => { setSelectedCountry(null) }} /> : <div></div>}
        </div>
    );
}

export default memo(WorldMap);