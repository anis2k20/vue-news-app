<script setup>

import {Icon} from "@iconify/vue";
</script>

<template>
<div>
  <nav class="bg-primary text-white p-1 font-newsreader">
    <ul class="flex justify-evenly items-center text-lg">
      <li class="flex justify-between gap-2 items-center font-bold"><router-link to="/"><icon icon="arcticons:top-news" class="text-6xl"/></router-link></li>
     <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/sports">Sports</router-link></li>
      <li><router-link to="/business">Business</router-link></li>
      <li><router-link to="/entertainment">Entertainment</router-link></li>
      <li><router-link to="/lifestyle">Lifestyle</router-link></li>
      <li><router-link to="/youth">Youth</router-link></li>
      <li><input type="text" placeholder="Search" class="p-1 rounded text-black"></li>
    </ul>
  </nav>
</div>
</template>

<style scoped>

</style>