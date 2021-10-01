import axios from 'axios';

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function sortByValue(sentiments) {
    const sortedSentiments = {}
    let keysSorted = Object.keys(sentiments).sort(function (a, b) { return sentiments[b] - sentiments[a] })
    for (let i in keysSorted) {
        sortedSentiments[keysSorted[i]] = sentiments[keysSorted[i]];
    }
    return sortedSentiments;
}

export default class SentimentService {
    es = null;

    getEventSource() {
        if (this.es == null) {
            this.es = new EventSource('https://moodoftheworld.azurewebsites.net/streaming_update/');
        }
        return this.es;
    }

    closeEventSource() {
        this.es.close();
    }

    getSentiments = async () => {
        const response = await axios.get(
            'https://moodoftheworld.azurewebsites.net/get_emotions/'
        );
        let cleanResponse = {};
        for (const country in response.data) {
            let senti = {};
            let lastUpdated = response.data[country]['lastUpdated'];
            for (const sentiment in response.data[country]) {
                if (sentiment !== 'lastUpdated') {
                    senti[sentiment] = roundToTwo(response.data[country][sentiment] * 100);
                }
            }
            cleanResponse[country] = {
                sentiments: sortByValue(senti),
                lastUpdated: lastUpdated

            };
        }
        return cleanResponse;
    }
}