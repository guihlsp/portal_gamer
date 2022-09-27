<template>
    <div>
        <h2 class="titulo">Publishers</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Steam</h3>
            
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Epic Games</h3>
            
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Discord</h3>
            
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>uPlay e uPlay+</h3>
            
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Origin</h3>
            
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Blizzard – Battle.net</h3>
            
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
    </div>
    <div>
        <p-paginator class="mt-4"></p-paginator>
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
  