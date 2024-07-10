<script setup>
import {ref,onMounted} from "vue";
import axios from "axios";
import Header from "./components/Header.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
import RightSidebar from "./components/RightSidebar.vue";

const news = ref([]);
onMounted(async ()=> {
  const response = await axios.get('https://newsdata.io/api/1/latest?apikey=pub_4830916a932b6cc1b9ecbf6256a8b8a976d00');
  news.value = response.data.results;
})
</script>

<template>

<div class="sticky top-0">
  <Header/>
</div>
<div class="flex justify-between overflow-hidden">
  <div class="h-screen w-72 fixed hidden lg:block">
<left-sidebar/>
  </div>
 <div  class="p-10 lg:px-[340px]">
   <router-view></router-view>
 </div>
  <div class="h-screen fixed right-0 w-72 hidden lg:block">
<right-sidebar/>
  </div>
</div>

</template>
