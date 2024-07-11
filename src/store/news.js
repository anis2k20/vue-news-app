import {defineStore} from "pinia";
import axios from "axios";

export const useNewsStore = defineStore("news", {
    state: () => ({
        news: [],
        topNews: [],
    }),
    actions: {
        async getNews() {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=db4231876d5543429da41d349c53ca03');
            this.news = response.data.articles;
            this.topNews = response.data.articles.slice(0, 6);
        },
        async getNewsByCategory(category) {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=db4231876d5543429da41d349c53ca03`);
            this.news = response.data.articles;
        },
        async searchNews(query) {
            this.news.splice(0);
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=db4231876d5543429da41d349c53ca03`);
            this.news = response.data.articles.slice(0, 10);
        }
    }
})