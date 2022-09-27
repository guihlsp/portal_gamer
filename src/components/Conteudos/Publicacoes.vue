<template>
    <div>
        <h2 class="titulo">Publicações</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Publicação 1</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Publicação 2</h3>    
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Publicação 3</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Publicação 4</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Publicação 5</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Publicação 6</h3>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
      name: "PublicacoesComponent",
  })
  </script>
  <style scoped>
  .titulo {
    text-align: center;
    font-size: 48px;
}
  </style>
  