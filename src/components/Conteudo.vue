<template>
    <Destaques/>
    <Lancamentos/>
    <Plataformas/>
    <Publishers/>
    <div class="grid">
      <div class="col-6 justify-content-center bg-indigo-50">
        <Sobre/>
      </div>
      <div class="col-6 justify-content-center bg-indigo-50 ">
        <Editorial/>
      </div>
      <div class="col-12 justify-content-center bg-indigo-50">
        <h3 class="text-center ">Redes sociais</h3>
        <div class="grid justify-content-around mt-4 align-itens-center">
          <p-button class="col-6 w-7rem h-2rem mb-2 bg-blue-500 border-none" icon="pi pi-twitter" label="Twitter"></p-button>
          <p-button class="col-6 w-7rem h-2rem mb-2 bg-pink-600 border-none" icon="pi pi-instagram" label="Instagram"></p-button>
          <p-button class="col-6 w-7rem h-2rem mb-2 bg-indigo-700 border-none" icon="pi pi-facebook" label="Facebook"></p-button>
          <p-button class="col-6 w-7rem h-2rem mb-2 bg-indigo-400 border-none" icon="pi pi-linkedin" label="Linkedin"></p-button>
        </div>
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
  