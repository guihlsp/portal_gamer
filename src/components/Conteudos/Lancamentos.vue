<template>
    <div>
        <h2 class="titulo">Lançamentos</h2>
    </div>
    <div class="grid justify-content-center gap-5">
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>God of War Ragnarök</h3>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/x6oF3Jxu7X0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Horizon Forbidden West</h3>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Lq594XmpPBg"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>FIFA 2023</h3>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/o3V-GvvzjE4"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>The Last of Us Part I</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Gran Turismo 7</h3>
        </div>
        <div class="col-8 md:col-6 lg:col-3 text-center border-3 border-blue-600">
            <h3>Call of Duty: Modern Warfare II</h3>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LancamentosComponent",
})
</script>
<style scoped>
.titulo {
    text-align: center;
    font-size: 48px;
}
</style>
  