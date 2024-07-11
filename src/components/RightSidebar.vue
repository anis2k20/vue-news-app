<template>
  <div class="h-screen font-newsreader border-l">
    <!--  card -->
    <div v-for="(n, index) in news.slice(3,6)" class="bg-white p-4 space-y-1">
      <div>
        <img :src="n.urlToImage" alt="photo" class="rounded-md">
      </div>
      <h3 class="font-semibold text-primary">{{ n.title.slice(0, 60) }}</h3>
      <p>{{ n.description?.slice(0, 40) }} <a class="font-bold py-2 cursor-pointer hover:text-primary" :href="n.url">...Read
        More</a></p>
    </div>
    <!--  end card-->
  </div>
</template>
<script setup>
import {computed} from "vue";
import {useNewsStore} from "../store/news.js";

const newsStore = useNewsStore();
const news = computed(() => newsStore.topNews);
</script>
