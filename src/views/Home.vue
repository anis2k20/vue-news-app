
<template>
  <Card :news="news"/>
</template>

<script setup>
import {computed, onMounted} from "vue";
import {useNewsStore} from "../store/news.js";
import Card from "../components/Card.vue";

const news = computed(() => useNewsStore().news);

onMounted(() => {
  const newsStore = useNewsStore();
  newsStore.getNews();
})
</script>

