<template>
    <div>
        <h2 class="titulo">Plataformas</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Steam</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/steam.jpeg" />
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
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Epic Games</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/epic.png" />
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
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>PlayStation Network</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/psn.jpg" />
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
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>uPlay e uPlay+</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/uplay.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        Assasin's Creed
                    </li>
                    <li>
                        Tom Clancy's Rainbow Six
                    </li>
                    <li>
                        Far Cry
                    </li>
                </span>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Origin</h3>
            <div class="h-16rem">
                <img class="imagem h-11rem" src="@/assets/imgs/plataformas/Origin.png" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="text-left">
                    <li>
                        The Sims 4
                    </li>
                    <li>
                        Battlefield 2042
                    </li>
                    <li>
                        Apex Legends
                    </li>
                </span>
            </div>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-outlined"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-blue-50 transition-colors transition-duration-1000 hover:bg-bluegray-100 shadow-5">
            <h3>Blizzard – Battle.net</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem" src="@/assets/imgs/plataformas/blizzard.jpg" />
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
  