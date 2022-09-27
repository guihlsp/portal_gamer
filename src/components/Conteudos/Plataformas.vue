<template>
    <div>
        <h2 class="titulo">Plataformas</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Steam</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/steam.jpeg"/>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Epic Games</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/epic.png"/>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Discord</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/discord.png"/>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>uPlay e uPlay+</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/uplay.png"/>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Origin</h3>
            <div class="h-16rem">
                <img class="imagem h-11rem" src="@/assets/imgs/plataformas/Origin.png"/>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Blizzard – Battle.net</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/blizzard.jpg"/>
            </div>
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
      name: "PlataformasComponent",
  })
  </script>
  <style scoped>
  .titulo {
    text-align: center;
    font-size: 48px;
}
.imagem {
    width: 100%;
}
  </style>
  