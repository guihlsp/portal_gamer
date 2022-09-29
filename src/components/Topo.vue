<template>
    <div class="grid">
        <p-menubar :model="items" class=" col-12 bg-indigo-50">
            <template #start>
                <img alt="logo" src="@/assets/imgs/logo.png" height="40" class="mr-2 ">
            </template>
            <template #item="{item}">
                <a :href="item.link" class="p-menuitem-link" aria-haspopup="false"
                    aria-expanded="false" role="menuitem" tabindex="0"><span
                        class="p-menuitem-icon" :class="item.icon"></span><span class="p-menuitem-text">{{item.label}}</span>
                    <!---->
                </a>
            </template>
            <template #end>
                <p-inputText placeholder="Pesquisar" type="text"></p-inputtext>
            </template>
        </p-menubar>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'TopoComponent',
    data() {
        return {
            items: [
                {
                    label: 'Destaques',
                    icon: 'pi pi-star-fill',
                    link: '#destaques'
                },
                {
                    label: 'Lançamentos',
                    icon: 'fa fa-rocket',
                    link: '#lancamentos'
                },
                {
                    label: 'Plataformas',
                    icon: 'fa fa-building',
                    link: '#plataformas'
                },
                {
                    label: 'Publishers',
                    icon: 'fa fa-clipboard',
                    link: '/#publishers'
                },
            ]
        }
    }

})
</script>

<style scoped>

</style>
