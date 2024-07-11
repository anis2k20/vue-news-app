<template>
  <Card :news="news"/>
</template>
<script setup>
import {computed, onMounted} from "vue";
import Card from "../components/Card.vue";
import {useNewsStore} from "../store/news";

const newsStore = useNewsStore();
const news = computed(() => newsStore.news);
onMounted(async () => {
  await newsStore.getNewsByCategory('sports');
});
</script>