const COLORS = {
    'Happy': '#425662',
    'Sed': '#A02451',
    'Neutral': '#012481',
    'Angry': '#FF3333'
}

export default class SentimentService {
    static myInstance = null;
    es = new EventSource('');

    allSentiments = {
        'IN': {
            'Happy': 0.12,
            'Sad': 0.33,
            'Neutral': 0.5,
            'Angry': 0.05
        },
        'PK': {
            'Happy': 0.5,
            'Sad': 0.33,
            'Neutral': 0.12,
            'Angry': 0.05
        },
        'US': {
            'Happy': 0.12,
            'Sad': 0.5,
            'Neutral': 0.33,
            'Angry': 0.05
        }
    };

    getEventSource() {
        return this.es;
    }

    closeEventSource() {
        this.es.close();
    }

    getCountrySentiments(countryCode) {
        return {
            'Happy': 0.12,
            'Sad': 0.33,
            'Neutral': 0.5,
            'Angry': 0.05
        };
    }

    getCountryColor(countryCode) {
        if (!(countryCode in this.allSentiments)) {
            return '#999999';
        }
        let max = 0;
        let maxSentiment = '';
        let sentiments = this.allSentiments[countryCode];
        for (var sentiment in sentiments) {
            if (sentiments[sentiment] > max) {
                max = sentiments[sentiment];
                maxSentiment = sentiment;
            }
        }
        return COLORS[maxSentiment];

    }

    static getInstance() {
        if (this.myInstance == null) {
            this.myInstance = new SentimentService();
        }
        return this.myInstance;
    }
}