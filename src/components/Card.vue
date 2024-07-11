
<template>
  <div v-for="item in news" v-if="news.length>0" class="py-2 pb-10">
    <!--  card -->
    <div class="font-newsreader space-y-2">
      <div>
        <img :src="item.urlToImage" alt="image" class="w-full">
      </div>
      <h2 class="font-newsreader text-2xl font-semibold py-2">{{ item.title }}</h2>
      <p class="text-right text-primary">Publish: {{ item.publishedAt }}</p>
      <p class="text-lg">{{ item.description }}</p>
      <div>
        <a :href="item.url"
           class="border font-bold py-2 cursor-pointer hover:text-primary hover:border-primary px-4 rounded">Read
          More</a>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center pt-56 text-gray-600">
    <icon class="text-5xl" icon="eos-icons:bubble-loading"/>
  </div>
</template>
<script setup>
import {Icon} from "@iconify/vue";

const {news} = defineProps(['news']);
</script>