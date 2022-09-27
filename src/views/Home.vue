<template>
  <main class="main">
    <Topo class="Topo "/>
    <Conteudo/>
    <Rodape/>
  </main>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Topo from '@/components/Topo.vue'
import Conteudo from '../components/Conteudo.vue'
import Rodape from '../components/Rodape.vue'


export default defineComponent({
  name: 'HomePage',
  components: {
    Topo,
    Conteudo,
    Rodape
}

})
</script>

<style>
  .Topo {
  z-index: 10;
  }
</style>
