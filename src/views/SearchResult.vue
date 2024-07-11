<template>
  <Card :news="news"/>
</template>
<script setup>
import {computed} from "vue";
import {useNewsStore} from "../store/news";
import Card from "../components/Card.vue";

const news = computed(() => useNewsStore().news);
</script>