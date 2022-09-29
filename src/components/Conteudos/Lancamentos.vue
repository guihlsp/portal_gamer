<template>
    <div>
        <h2 class="titulo text-white" id="lancamentos">Lançamentos</h2>
    </div>
    <div class="grid">
        <p-toolbar class="mb-4 toolbox col-12">
            <template #start>
                <p-select v-model="generoSelecionado" :options="generos" optionLabel="nome" placeholder="Gênero">
                </p-select>
            </template>
            <template #end>
                <p-inplace :closable="true">
                    <template #display>
                        <span class="pi pi-search" style="vertical-align: middle"></span>
                        <span style="margin-left:.5rem; ">Realizar busca</span>
                    </template>
                    <template #content>
                        <p-inputText placeholder="Pesquisar"></p-inputText>
                        <p-button icon="pi pi-search" class="mr-2"></p-button>
                    </template>
                </p-inplace>
            </template>
        </p-toolbar>
    </div>
    <div class="grid justify-content-center gap-5">
        <div v-for="j,i in jogos" :key="i"
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl bg-indigo-50 transition-colors transition-duration-1000 hover:bg-indigo-50 shadow-5">
            <h3>{{j.nome}}</h3>
            <iframe class="border-round-2xl" width="100%" height="315" :src="j.video"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div class="flex justify-content-evenly align-items-center mt-2">
                <p-button class="p-button-danger p-button-raised" icon="pi pi-thumbs-down-fill"></p-button>
                <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-primary p-button-raised"
                    type="button" @click="acessarlinks(j.link)"></p-button>
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
    name: "LancamentosComponent",
    data() {
        return {
            jogos: [
                {
                    nome: "God of War Ragnarök",
                    link: "https://www.playstation.com/pt-br/games/god-of-war-ragnarok/",
                    video: "https://www.youtube.com/embed/x6oF3Jxu7X0"
                },
                {
                    nome: "Horizon Forbidden West",
                    link: "https://www.playstation.com/pt-br/games/horizon-forbidden-west/",
                    video: "https://www.youtube.com/embed/Lq594XmpPBg"
                },
                {
                    nome: "FIFA 2023",
                    link: "https://www.ea.com/pt-br/games/fifa/fifa-23",
                    video: "https://www.youtube.com/embed/o3V-GvvzjE4"
                },
                {
                    nome: "The Last of Us Part I",
                    link: "https://www.playstation.com/pt-br/games/the-last-of-us-part-i/",
                    video: "https://www.youtube.com/embed/WxjeV10H1F0"
                },
                {
                    nome: "Gran Turismo 7",
                    link: "https://www.playstation.com/pt-br/games/gran-turismo-7/",
                    video: "https://www.youtube.com/embed/1tBUsXIkG1A"
                },
                {
                    nome: "Call of Duty: Modern Warfare II",
                    link: "https://www.callofduty.com/br/pt/modernwarfare2",
                    video: "https://www.youtube.com/embed/r72GP1PIZa0"
                },
            ],
            generoSelecionado: null,
            generos: [
                {
                    id: "1",
                    nome: "Ação"
                },
                {
                    id: "2",
                    nome: "Aventura"
                },
                {
                    id: "3",
                    nome: "RPG"
                },
                {
                    id: "4",
                    nome: "MOBA"
                },
                {
                    id: "4",
                    nome: "Simulação"
                },
                {
                    id: "4",
                    nome: "Corrida"
                },
                {
                    id: "4",
                    nome: "FPS"
                },
            ]
        }
    },
    methods: {
        acessarlinks(link: string) {
            window.open(link, "_blank");
        }
    }
})
</script>
<style scoped>
.titulo {
    text-align: center;
    font-size: 48px;
}

.paginacao {
    background: none;
}
</style>
  