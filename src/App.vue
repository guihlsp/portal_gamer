<template>
  <main class="">
    <div class="">
      <Topo class="sempre col-12"/>
    </div>
    <router-view class="mt-6"/>
    <Rodape/>
  </main>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Topo from '@/components/Topo.vue'
import Rodape from '@/components/Rodape.vue'


export default defineComponent({
    name: "App",
    components: {
      Topo,
      Rodape
    }
})
</script>
<style>
 .sempre {
  position: fixed;
  top:0;
  z-index: 1000;
 }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
