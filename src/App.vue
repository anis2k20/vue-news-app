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
  <div class="p-10 lg:px-[340px]">

    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur dignissimos eligendi, fuga
      illo nihil, porro quia quibusdam quis, unde voluptatibus voluptatum. Adipisci dolorem doloremque facilis qui quod
      sequi ullam?
    </div>
    <div>Dolore ex expedita nesciunt quia quisquam? Asperiores aut corporis cum cupiditate dolore exercitationem iure,
      laboriosam minus praesentium quidem saepe sed sunt veritatis. Assumenda blanditiis et expedita impedit quos rem
      sapiente?
    </div>
    <div>Deserunt, ea ex inventore magnam maxime officiis porro tempore voluptatum. Ad aliquid autem, dicta enim
      exercitationem facilis illum incidunt itaque neque nisi officia provident quam quo sit tempora, tempore veniam!
    </div>
    <div>A cumque dignissimos, dolorum eos fugit iste quod reiciendis repellendus temporibus velit? Ad alias amet,
      asperiores assumenda at debitis doloremque, est iure minus natus perspiciatis porro repudiandae rerum sequi
      veniam.
    </div>
    <div>Dolor eius impedit sit! Dicta dolor facilis ipsa ipsum minus mollitia nemo nisi nulla tenetur unde. Adipisci
      aliquam, cumque expedita fugit labore laborum, magnam quibusdam quisquam rerum tempora tenetur vero?
    </div>
    <div>Amet architecto atque blanditiis consectetur dolorem minus officiis rerum sed voluptatum. Alias aperiam
      deserunt ea, eum fuga ipsum minima molestias nulla officia perspiciatis rem repudiandae sed veniam voluptas
      voluptate voluptatibus.
    </div>
    <div>Culpa delectus incidunt minima nisi provident sequi voluptates! Ad aliquam architecto, blanditiis deserunt
      dolor eaque eveniet excepturi fugit hic molestias nisi nobis perferendis quasi, quia quibusdam sunt vitae
      voluptate voluptatem?
    </div>
    <div>Dolorem, id illo maxime nihil praesentium quam. Ab at neque provident quae? Aliquam asperiores commodi
      consequuntur, culpa, doloribus eveniet facilis ipsum natus, necessitatibus nisi quibusdam suscipit voluptas
      voluptate! Consequatur, nihil.
    </div>
    <div>Accusamus aliquid amet at consequuntur delectus deleniti doloremque dolorum eius eos mollitia, odio omnis
      pariatur quis rem repellat repellendus sapiente sit tempore ut voluptas. Alias culpa ex fuga qui temporibus!
    </div>
    <div>Ab accusantium, asperiores consectetur dicta dignissimos dolorem doloremque eaque ex expedita illo inventore
      iusto laudantium magni natus officiis porro quo, reiciendis veniam veritatis voluptas! Eos fugiat maxime quam
      reprehenderit sit?
    </div>
  </div>
  <div class="h-screen fixed right-0 w-72 hidden lg:block">
<right-sidebar/>
  </div>
</div>

</template>
