import React, { memo, useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import SentimentService from 'services/SentimentService';

const sentimentService = SentimentService.getInstance();

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const WorldMap = ({ setTooltipContent }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        sentimentService.getEventSource().onmessage = (data) => { }; // TODO: Add function call
        return () => {
            window.removeEventListener("resize", updateWidthAndHeight);
            sentimentService.closeEventSource();
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
                                geography={geo}
                                onMouseEnter={() => {
                                    const { NAME, POP_EST } = geo.properties;
                                    console.log(`${JSON.stringify(geo.properties)}`);
                                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                style={{
                                    default: {
                                        fill: sentimentService.getCountryColor(geo.properties['ISO_A2']),
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