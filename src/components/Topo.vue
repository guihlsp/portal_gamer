<template>
  <p-menubar :model="items" class="bg-indigo-50">
				<template #start>
					<img alt="logo" src="@/assets/imgs/logo.png" height="40" class="mr-2 ">
				</template>
				<template #end>
					<p-inputText placeholder="Pesquisar" type="text"></p-inputtext>
				</template>
		</p-menubar>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'TopoComponent',
  data() {
        return {
            items: [
                {
					label:'Destaques',
					icon:'pi pi-star-fill',
                },
                {
					label:'Lançamentos',
					icon:'fa fa-rocket',
                },
                {
					label:'Plataformas',
					icon:'fa fa-building',
                },
                {
					label:'Publishers',
					icon:'fa fa-clipboard',
                }, 
            ]
        }
    }
  
})
</script>

<style scoped>

</style>
