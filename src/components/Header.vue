<template>
  <div>
    <nav class="bg-white text-black pb-3 sm:p-1 font-newsreader border-b border-b-gray-200">
      <ul class="flex flex-wrap justify-evenly gap-5 items-center text-lg ">
        <li>
          <router-link class="border-none" to="/">
            <icon class="text-6xl" icon="arcticons:top-news"/>
          </router-link>
        </li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/sports">Sports</router-link>
        </li>
        <li>
          <router-link to="/business">Business</router-link>
        </li>
        <li>
          <router-link to="/entertainment">Entertainment</router-link>
        </li>
        <li>
          <router-link to="/health">Health</router-link>
        </li>
        <li>
          <router-link to="/technology">Technology</router-link>
        </li>
        <li class="flex gap-2"><input v-model="searchNews" class="px-2 rounded text-black border border-gray-500 outline-1 ring-0 focus:outline-none" placeholder="Search for news"
                                      type="text">
          <button class="p-1 px-2 rounded bg-black text-white" @click="search(searchNews)">Search</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue";
import {ref} from "vue";
import {useNewsStore} from "../store/news";

const searchNews = ref("");

function search(query) {
  useNewsStore().searchNews(query);
  this.$router.push('/search-result')
}
</script>


<style scoped>
a.router-link-active {
  @apply border-b border-black pb-1 font-bold;
}
</style>