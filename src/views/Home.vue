<template>
  <main class="main">
    <Conteudo/>
  </main>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import Conteudo from '../components/Conteudo.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Conteudo
}

})
</script>

<style>
  
</style>
