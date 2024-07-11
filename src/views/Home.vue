
<template>
<div v-for="item in news" class="py-4">
<!--  card -->
  <div class="font-newsreader space-y-2">
    <div>
      <img :src="item.image_url" alt="image" class="w-full">
    </div>
    <h2 class="font-newsreader text-3xl font-semibold py-2">{{item.title}}</h2>
    <p class="text-right text-primary">Publish: {{item.pubDate}}</p>
    <p class="text-lg">{{item.description}}</p>
    <a :href="item.link" class="border font-bold py-1.5 hover:text-primary hover:border-primary px-4 rounded">Read More</a>
  </div>
</div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import {useNewsStore} from "../store/news.js";

const news = computed(() => useNewsStore().news);

onMounted(() => {
  const newsStore = useNewsStore();
  newsStore.getNews();
})
</script>

