<template>
    <div>
        <h2 class="titulo text-white" id="plataformas">Plataformas</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div v-for="p,i in plataformas" :key="i"
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-indigo-50 transition-colors transition-duration-1000 hover:bg-primary-200 shadow-5">
            <h3>{{p.nome}}</h3>
            <div class="h-16rem">
                <img class="imagem h-15rem w-15rem" :src="p.imagem" />
            </div>
            <div class="mb-3">
                <h4>Principais jogos</h4>
                <span class="grid justify-content-center">
                    <ul class="col-12 md:col-6 lg:col-4 border-1 w-10rem vertical-align-middle">
                        {{p.jogo1}}
                    </ul>
                    <ul class="col-12 md:col-6 lg:col-4 border-1 w-10rem vertical-align-middle">
                        {{p.jogo2}}
                    </ul>
                    <ul class="col-12 md:col-6 lg:col-4 border-1 w-10rem vertical-align-middle">
                        {{p.jogo3}}
                    </ul>
                </span>
            </div>
            <div class="flex justify-content-evenly align-items-center mt-2">
                <p-button class="p-button-danger p-button-raised" icon="pi pi-thumbs-down-fill"></p-button>
                <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-primary p-button-raised"
                    @click="acessarlinks(p.link)"></p-button>
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
    name: "PlataformasComponent",
    data() {
        return {
            plataformas: [
                {
                    nome: "Steam",
                    imagem: "https://github.com/guihlsp/portal_gamer/blob/main/src/assets/imgs/plataformas/steam.png?raw=true",
                    jogo1: "Dota 2",
                    jogo2: "Counter-Strike",
                    jogo3: "PUBG",
                    link: "https://www.sie.com/en/index.html",
                },
                {
                    nome: "Epic Games",
                    imagem: "https://github.com/guihlsp/portal_gamer/blob/main/src/assets/imgs/plataformas/epic.png?raw=true",
                    jogo1: "Fortnite",
                    jogo2: "Fall Guys",
                    jogo3: "Rocket League",
                    link: "https://www.microsoft.com/pt-br",
                },
                {
                    nome: "PlayStation Network",
                    imagem: "https://github.com/guihlsp/portal_gamer/blob/main/src/assets/imgs/plataformas/psn.png?raw=true",
                    jogo1: "God of War",
                    jogo2: "The Last of Us",
                    jogo3: "FIFA",
                    link: "https://www.activisionblizzard.com/",
                },
            ]
        }
    },
    methods: {
        acessarlinks(link: string) {
            window.open(link, "_blank");
        }
    }
});
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
  