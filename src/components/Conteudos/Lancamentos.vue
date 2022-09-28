<template>
    <div>
        <h2 class="titulo">Lançamentos</h2>
    </div>
    <p-toolbar class="mb-4 paginacao toolbox">
        <template #start>
            <p-select v-model="generoSelecionado" :options="generos" optionLabel="nome" placeholder="Gênero"></p-select>
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
    <p-divider type="solid" layout="horizontal"/>
    <div class="grid justify-content-center gap-5">
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl transition-colors transition-duration-1000 hover:bg-indigo-50 shadow-5">
            <h3>God of War Ragnarök</h3>
            <iframe class="border-round-2xl" width="100%" height="315" src="https://www.youtube.com/embed/x6oF3Jxu7X0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-success p-button-raised"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl transition-colors transition-duration-1000 hover:bg-indigo-50 shadow-5">
            <h3>Horizon Forbidden West</h3>
            <iframe class="border-round-2xl" width="100%" height="315" src="https://www.youtube.com/embed/Lq594XmpPBg"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-success p-button-raised"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl transition-colors transition-duration-1000 hover:bg-indigo-50 shadow-5">
            <h3>FIFA 2023</h3>
            <iframe class="border-round-2xl" width="100%" height="315" src="https://www.youtube.com/embed/o3V-GvvzjE4"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-success p-button-raised"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl transition-colors transition-duration-1000 hover:bg-indigo-50 shadow-5">
            <h3>The Last of Us Part I</h3>
            <iframe class="border-round-2xl" width="100%" height="315" src="https://www.youtube.com/embed/WxjeV10H1F0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-success p-button-raised"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl transition-colors transition-duration-1000 hover:bg-indigo-50 shadow-5">
            <h3>Gran Turismo 7</h3>
            <iframe class="border-round-2xl" width="100%" height="315" src="https://www.youtube.com/embed/1tBUsXIkG1A"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-success p-button-raised"></p-button>
        </div>
        <div
            class="col-8 md:col-6 lg:col-3 text-center border-1 border-primary-700 border-round-2xl transition-colors transition-duration-1000 hover:bg-indigo-50 shadow-5">
            <h3>Call of Duty: Modern Warfare II</h3>
            <iframe class="border-round-2xl" width="100%" height="315" src="https://www.youtube.com/embed/r72GP1PIZa0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <p-button label="Saiba mais..." icon="pi pi-info-circle" class="p-button-success p-button-raised"></p-button>
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
.toolbox {
    border: 0;
}
</style>
  