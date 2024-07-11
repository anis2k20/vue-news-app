<script setup>
import Header from "./components/Header.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
import RightSidebar from "./components/RightSidebar.vue";
</script>

<template>
  <div class="sticky top-0">
    <Header/>
  </div>
  <div class="flex justify-between overflow-hidden">
    <div class="h-screen w-72 fixed hidden lg:block">
      <left-sidebar/>
    </div>
    <div class="p-5 lg:px-[320px] w-full">
      <router-view></router-view>
    </div>
    <div class="h-screen fixed right-0 w-72 hidden lg:block">
      <right-sidebar/>
    </div>
  </div>
</template>
