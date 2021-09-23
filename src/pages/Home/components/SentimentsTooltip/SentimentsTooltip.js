import React from 'react';
import { getSentimentColor } from 'utils/countryColor';
import './SentimentsTooltip.css';

export const SentimentsTooltip = ({ sentiments }) => {
    return (
        <div>
            {
                Object.keys(sentiments).map(function (sentiment, i) {
                    return (
                        <div>
                            <span class='dot' style={{ 'background-color': getSentimentColor(sentiment) }}></span>
                            &nbsp;&nbsp;
                            <span>{sentiment.charAt(0).toUpperCase() + sentiment.slice(1) + ': ' + sentiments[sentiment]+'%'}</span>
                        </div>
                    )
                })
            }
        </div >
    );
}