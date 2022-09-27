<template>
    <Destaques/>
    <Lancamentos/>
    <Plataformas/>
    <Publicacoes/>
    <Sobre/>
    <Editorial/>
</template>
  
<script lang="ts">
  
  import { defineComponent } from 'vue'
  import Destaques from '@/components/Conteudos/Destaques.vue'
  import Lancamentos from '@/components/Conteudos/Lancamentos.vue'
  import Plataformas from '@/components/Conteudos/Plataformas.vue'
  import Publicacoes from '@/components/Conteudos/Publicacoes.vue'
  import Sobre from '@/components/Conteudos/Sobre.vue'
  import Editorial from '@/components/Conteudos/Editorial.vue'
  
  export default defineComponent({
    name: 'ConteudoComponent',
    components: {
      Destaques,
      Lancamentos,
      Plataformas,
      Publicacoes,
      Sobre,
      Editorial
    }
  
  })
</script>
  
<style scoped>
    
</style>
  