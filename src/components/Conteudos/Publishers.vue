<template>
    <div>
        <h2 class="titulo">Publishers</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Sony Interactive Entertainment</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/publishers/sony.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Diablo
                    </li>
                    <li>
                        World of Warcraft
                    </li>
                    <li>
                        Overwatch
                    </li>
                </span>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Microsoft</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/publishers/microsoft.jpg" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Diablo
                    </li>
                    <li>
                        World of Warcraft
                    </li>
                    <li>
                        Overwatch
                    </li>
                </span>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Electronic Arts</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/publishers/ea.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Diablo
                    </li>
                    <li>
                        World of Warcraft
                    </li>
                    <li>
                        Overwatch
                    </li>
                </span>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Activision Blizzard</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/publishers/activision.jpg" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Diablo
                    </li>
                    <li>
                        World of Warcraft
                    </li>
                    <li>
                        Overwatch
                    </li>
                </span>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Nintendo</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/publishers/nintendo.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Diablo
                    </li>
                    <li>
                        World of Warcraft
                    </li>
                    <li>
                        Overwatch
                    </li>
                </span>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Bandai Namco Entertainment</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/publishers/bandai.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Diablo
                    </li>
                    <li>
                        World of Warcraft
                    </li>
                    <li>
                        Overwatch
                    </li>
                </span>
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
  </style>
  