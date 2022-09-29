<template>
    <p-carousel :value="jogos" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" :circular="true"
        class="Carrossel" :autoplayInterval="15000">
        <template #header>
            <span>
                <h2 class="titulo text-white" id="destaques">Destaques</h2>
            </span>
        </template>
        <template #item="jogos">
            <div class="grid p-4 justify-content-center bg-indigo-50 align-items-center border-round-2x1">
                <div class="md:col-6 sm:col-12 align-items-end">
                    <iframe class="border-round-2xl" width="100%" height="430px" :src="jogos.data.video"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="md:col-6 sm:col-12">
                    <h2 class="text-center">{{jogos.data.nome}}</h2>
                    <span>
                        <p><b>Descrição: </b>{{jogos.data.descricao}}
                        </p>
                        <p><b>Gênero: </b>{{jogos.data.genero}}
                        </p>
                        <p><b>Lançamento: </b>{{jogos.data.lancamento}}
                        </p>
                        <p><b>Produtora: </b>{{jogos.data.produtora}}
                        </p>
                        <p><b>Avaliação: </b>
                            <p-rating v-model="jogos.data.avaliacao" :stars="5" :readonly="true" :cancel="false">
                            </p-rating>
                        </p>
                    </span>
                    <div class="flex justify-content-evenly align-items-center mt-4">
                        <p-button class="p-button-danger p-button-raised" icon="pi pi-thumbs-down-fill"></p-button>
                        <p-button type="button" label="Saiba mais..." icon="pi pi-info-circle"
                            class="p-button-primary p-button-raised" @click="acessarSite(jogos.data.site)">
                        </p-button>
                        <p-button class="p-button-success p-button-raised" icon="pi pi-thumbs-up-fill"></p-button>
                    </div>
                </div>
            </div>
        </template>
    </p-carousel>

</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DestaquesComponent',
    data() {
        return {
            jogos: [
                {
                    id: "1",
                    nome: "Elden Ring",
                    descricao: "ELDEN RING, é um RPG de ação e fantasia ambientado em um mundo cheio de mistério e perigo. O jogo é um projeto colaborativo entre o diretor Hidetaka Miyazaki e o romancista de fantasia George R. R. Martin.",
                    genero: "Aventura, Mundo aberto, RPG",
                    lancamento: "25 de fevereiro de 2022",
                    produtora: "FromSoftware",
                    plataformas: "PS4, Xbox Series X e Series S, Xbox One, PS5, Microsoft Windows",
                    avaliacao: 4,
                    video: "https://www.youtube.com/embed/E3Huy2cdih0",
                    site: "https://en.bandainamcoent.eu/elden-ring/elden-ring"
                },
                {
                    id: "2",
                    nome: "League of Legends",
                    descricao: "League of Legends é um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.",
                    genero: "MOBA",
                    lancamento: "27 de outubro de 2009",
                    produtora: "Riot Games",
                    plataformas: "Microsoft Windows, MacOS",
                    avaliacao: 3,
                    video: "https://www.youtube.com/embed/mDYqT0_9VR4",
                    site: "https://www.leagueoflegends.com/pt-br/"
                },
                {
                    id: "3",
                    nome: "Flight Simulator",
                    descricao: "Microsoft Flight Simulator é o mais novo jogo da clássica franquia de simulação de voo da Microsoft. A mais recente versão conta com inúmeros aviões diferentes e mapas reais, alimentados com dados de serviços como Bing, com extrema fidelidade.",
                    genero: "Simulador",
                    lancamento: "27 de outubro de 2020",
                    produtora: "Microsoft",
                    plataformas: "Microsoft Windows",
                    avaliacao: 4,
                    video: "https://www.youtube.com/embed/TYqJALPVn0Y",
                    site: "https://www.xbox.com/pt-BR/games/microsoft-flight-simulator"
                },
                {
                    id: "4",
                    nome: "FIFA 2022",
                    descricao: "FIFA 22 é um jogo eletrônico de simulação de futebol desenvolvido e publicado pela Electronic Arts. FIFA 22 deixa o jogo ainda mais real com avanços fundamentais de jogabilidade e uma nova temporada de inovações em todos os modos.",
                    genero: "Esportes, Simulador",
                    lancamento: " 1 de Outubro de 2021",
                    produtora: "Eletronic Arts",
                    plataformas: "Microsoft Windows, PS4, Xbox One, PS5, Xbox Series X/S, Nintendo Switch",
                    avaliacao: 3,
                    video: "https://www.youtube.com/embed/o1igaMv46SY",
                    site: "https://www.ea.com/pt-br/games/fifa/fifa-22"
                },
                {
                    id: "5",
                    nome: "God of War (2018)",
                    descricao: " É o oitavo título da série God of War. Ao contrário dos jogos anteriores, que eram vagamente baseados na mitologia grega, este título é vagamente baseado na mitologia nórdica, com a maior parte do tempo situado na antiga Noruega no reino de Midgard.",
                    genero: "Ação, Aventura",
                    lancamento: "20 de Abril de 2018",
                    produtora: " Santa Monica Studio / Sony Interactive Entertainment",
                    plataformas: "Microsoft Windows, PS4, PS5",
                    avaliacao: 4,
                    video: "https://www.youtube.com/embed/gOE2BVRCUkM",
                    site: "https://store.steampowered.com/app/1593500/God_of_War/"
                },
            ],
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 1,
                    numScroll: 1
                },
                {
                    breakpoint: '600px',
                    numVisible: 1,
                    numScroll: 1
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        }
    },
    methods: {
        acessarSite(site: string) {
            window.open(site, "_blank");
        }
    },

})
</script>
  
<style scoped>
.titulo {
    text-align: center;
    font-size: 48px;
}
</style>
  