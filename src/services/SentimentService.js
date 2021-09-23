import axios from 'axios';

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

export default class SentimentService {
    es = null;

    getEventSource() {
        if (this.es == null) {
            this.es = new EventSource('https://mood-of-the-world-twitter.herokuapp.com/streaming_update/');
        }
        return this.es;
    }

    closeEventSource() {
        this.es.close();
    }

    getSentiments = async () => {
        const response = await axios.get(
            'https://mood-of-the-world-twitter.herokuapp.com/get_emotions/'
        );
        for (const country in response.data) {
            for (const sentiment in response.data[country]) {
                response.data[country][sentiment] = roundToTwo(response.data[country][sentiment]*100);
            }
        }
        return response.data;
    }
}