<template>
    <div>
        <h2 class="titulo">Sobre</h2>
        <span class="grid col-12 ">
            <p class="text-justify vertical-align-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor metus quis fermentum suscipit.
            Pellentesque tincidunt facilisis pellentesque. Nulla porta ex a est pretium rhoncus. Vivamus interdum ante
            iaculis nisl finibus aliquet. Cras quis turpis lorem. Praesent quis arcu sit amet nunc faucibus hendrerit eget eget diam.
            </p>
        </span>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SobreComponent",
})
</script>
<style scoped>
.titulo {
    text-align: center;
    font-size: 32px;
}
</style>
  