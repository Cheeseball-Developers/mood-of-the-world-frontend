const COLORS = {
    '': '#999999',
    'anger': '#FF3333',
    'anticipation': '#F45826',
    'disgust': '#601881',
    'fear': '#224A60',
    'joy': '#56BC1C',
    'love': '#C92353',
    'optimism': '#007F46',
    'pessimism': '#687413',
    'sadness': '#27278D',
    'surprise': '#C006A8',
    'trust': '#7F0037',
};

export function getCountryColor(sentiments) {
    let max = 0;
    let maxSentiment = '';
    for (var sentiment in sentiments) {
        if (sentiments[sentiment] > max) {
            max = sentiments[sentiment];
            maxSentiment = sentiment;
        }
    }
    return COLORS[maxSentiment];
}

export function getSentimentColor(sentiment) {
    if (!(sentiment in COLORS)) {
        return '#999999';
    }
    return COLORS[sentiment];
}