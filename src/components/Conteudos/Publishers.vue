<template>
    <div>
        <h2 class="titulo text-white">Publishers</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-indigo-50 transition-colors transition-duration-1000 hover:bg-primary-200 shadow-5">
            <h3>Sony</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem w-15rem" src="@/assets/imgs/publishers/sony.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="grid justify-content-center">
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        God of War
                    </ul>
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        The Last of Us
                    </ul>
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        Spider-Man
                    </ul>
                </span>
            </div>
            <div class="flex justify-content-evenly align-items-center mt-2">
                <p-button class="p-button-danger p-button-raised" icon="pi pi-thumbs-down-fill"></p-button>
                <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-primary p-button-raised"></p-button>
                <p-button class="p-button-success p-button-raised" icon="pi pi-thumbs-up-fill"></p-button>
            </div>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-indigo-50 transition-colors transition-duration-1000 hover:bg-primary-200 shadow-5">
            <h3>Microsoft</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem w-15rem" src="@/assets/imgs/publishers/microsoft.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="grid justify-content-center">
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        Minecraft
                    </ul>
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        Forza Horizon 5
                    </ul>
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        Sea of Thieves
                    </ul>
                </span>
            </div>
            <div class="flex justify-content-evenly align-items-center mt-2">
                <p-button class="p-button-danger p-button-raised" icon="pi pi-thumbs-down-fill"></p-button>
                <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-primary p-button-raised"></p-button>
                <p-button class="p-button-success p-button-raised" icon="pi pi-thumbs-up-fill"></p-button>
            </div>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-indigo-50 transition-colors transition-duration-1000 hover:bg-primary-200 shadow-5">
            <h3>Activision Blizzard</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem w-15rem" src="@/assets/imgs/publishers/activision.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="grid justify-content-center">
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        Diablo
                    </ul>
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        World of Warcraft
                    </ul>
                    <ul class="sm:col-12 md:col-6 lg:col-4 border-1 w-10rem">
                        Overwatch
                    </ul>
                </span>
            </div>
            <div class="flex justify-content-evenly align-items-center mt-2">
                <p-button class="p-button-danger p-button-raised" icon="pi pi-thumbs-down-fill"></p-button>
                <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-primary p-button-raised"></p-button>
                <p-button class="p-button-success p-button-raised" icon="pi pi-thumbs-up-fill"></p-button>
            </div>
        </div>
    </div>
    <div class="flex justify-content-center">
        <p-paginator class="mt-4 paginacao"></p-paginator>
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

    .imagem {
    width: 100%;
    }
    .paginacao {
    background: none;
}
  </style>
  