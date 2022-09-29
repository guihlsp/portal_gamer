<template>
    <div>
        <h2 class="titulo text-white" id="publishers">Publishers</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div v-for="p,i in publishers" :key="i"
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
    name: "PublicacoesComponent",
    data() {
        return {
            publishers: [
                {
                    nome: "Sony",
                    imagem: "https://github.com/guihlsp/portal_gamer/blob/main/src/assets/imgs/publishers/sony.png?raw=true",
                    jogo1: "God of War",
                    jogo2: "The Last of Us",
                    jogo3: "Spider-Man",
                    link: "https://www.sie.com/en/index.html",
                },
                {
                    nome: "Microsoft",
                    imagem: "https://github.com/guihlsp/portal_gamer/blob/main/src/assets/imgs/publishers/microsoft.png?raw=true",
                    jogo1: "Minecraft",
                    jogo2: "Forza Horizon 5",
                    jogo3: "Sea of Thieves",
                    link: "https://www.microsoft.com/pt-br",
                },
                {
                    nome: "Activision Blizzard",
                    imagem: "https://github.com/guihlsp/portal_gamer/blob/main/src/assets/imgs/publishers/activision.png?raw=true",
                    jogo1: "Diablo",
                    jogo2: "World of Warcraft",
                    jogo3: "Overwatch",
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
  