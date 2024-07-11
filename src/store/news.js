import {defineStore} from "pinia";
import axios from "axios";

export const useNewsStore = defineStore("news", {
    state: () => ({
        news: []
    }),
    actions: {
        async getNews() {
            const response = await axios.get('https://newsdata.io/api/1/latest?apikey=pub_4830916a932b6cc1b9ecbf6256a8b8a976d00');
            this.news = response.data.results;
        }
    }
})