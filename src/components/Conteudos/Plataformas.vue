<template>
    <div>
        <h2 class="titulo">Plataformas</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Plataforma 1</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Plataforma 2</h3>    
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Plataforma 3</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Plataforma 4</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Plataforma 5</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Plataforma 6</h3>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
      name: "PlataformasComponent",
  })
  </script>
  <style scoped>
  .titulo {
    text-align: center;
    font-size: 48px;
}
  </style>
  