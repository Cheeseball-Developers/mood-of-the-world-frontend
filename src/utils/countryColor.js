const COLORS = {
    '': ['#999999', '#999999'],
    'anger': ['#EE4949', '#FF3333'],
    'anticipation': ['#F57953', '#F45826'],
    'disgust': ['#A44ACE', '#9030BD'],
    'fear': ['#365B6F', '#224A60'],
    'joy': ['#40DC50', '#2CC93C'],
    'love': ['#EE527E', '#C92353'],
    'optimism': ['#12A262', '#007F46'],
    'pessimism': ['#98A82E', '#83921E'],
    'sadness': ['#535392', '#3C3C79'],
    'surprise': ['#E437BD', '#D829B0'],
    'trust': ['#832A51', '#772046'],
};

export function getSentimentColor(sentiment) {
    if (!(sentiment in COLORS)) {
        return '#999999';
    }
    return COLORS[sentiment][0];
}

export function getSentimentHighlightColor(sentiment) {
    if (!(sentiment in COLORS)) {
        return '#999999';
    }
    return COLORS[sentiment][1];
}