<template>
    <Destaques/>
    <Lancamentos/>
    <Plataformas/>
    <Publishers/>
    <div class="grid">
      <div class="flex col-6 justify-content-center bg-indigo-50 ">
        <Sobre/>
      </div>
      <div class="flex col-6 justify-content-center bg-indigo-50 ">
        <Editorial/>
      </div>
    </div>
</template>
  
<script lang="ts">
  
  import { defineComponent } from 'vue'
  import Destaques from '@/components/Conteudos/Destaques.vue'
  import Lancamentos from '@/components/Conteudos/Lancamentos.vue'
  import Plataformas from '@/components/Conteudos/Plataformas.vue'
  import Publishers from '@/components/Conteudos/Publishers.vue'
  import Sobre from '@/components/Conteudos/Sobre.vue'
  import Editorial from '@/components/Conteudos/Editorial.vue'
  
  export default defineComponent({
    name: 'ConteudoComponent',
    components: {
      Destaques,
      Lancamentos,
      Plataformas,
      Publishers,
      Sobre,
      Editorial
    }
  
  })
</script>
  
<style>
  
</style>
  