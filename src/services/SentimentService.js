import axios from 'axios';

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
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
        for (const country in response.data) {
            for (const sentiment in response.data[country]) {
                if (sentiment !== 'lastUpdated') {
                    response.data[country][sentiment] = roundToTwo(response.data[country][sentiment] * 100);
                }
            }
        }
        return response.data;
    }
}