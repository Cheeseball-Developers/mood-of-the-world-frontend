import axios from 'axios';

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
        return response.data;
    }
}