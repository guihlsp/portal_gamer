<template>
    <div>
        <h2 class="titulo text-white">Plataformas</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-indigo-50 transition-colors transition-duration-1000 hover:bg-primary-200 shadow-5">
            <h3>Steam</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem border-round-2xl" src="@/assets/imgs/plataformas/steam.jpeg" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Dota 2
                    </li>
                    <li>
                        Counter-Strike
                    </li>
                    <li>
                        PUBG: BATTLEGROUNDS
                    </li>
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
            <h3>Epic Games</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem border-round-2xl" src="@/assets/imgs/plataformas/epic.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Fortnite
                    </li>
                    <li>
                        Fall Guys
                    </li>
                    <li>
                        Rocket League
                    </li>
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
            <h3>PlayStation Network</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem border-round-2xl" src="@/assets/imgs/plataformas/psn.jpg" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        God of War
                    </li>
                    <li>
                        The Last of Us
                    </li>
                    <li>
                        FIFA
                    </li>
                </span>
            </div>
            <div class="flex justify-content-evenly align-items-center mt-2">
                <p-button class="p-button-danger p-button-raised" icon="pi pi-thumbs-down-fill"></p-button>
                <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-primary p-button-raised"></p-button>
                <p-button class="p-button-success p-button-raised" icon="pi pi-thumbs-up-fill"></p-button>
            </div>
        </div>
    </div>
    <div>
        <p-paginator class="mt-4 paginacao"></p-paginator>
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
.paginacao {
    background: none;
}
</style>
  