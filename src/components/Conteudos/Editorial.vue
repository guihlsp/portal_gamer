<template>
    <div >
        <h2 class="titulo">Editorial</h2>
        <span class="grid col-12 ">
            <p class="text-justify vertical-align-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor metus quis fermentum suscipit.
            Pellentesque tincidunt facilisis pellentesque. Nulla porta ex a est pretium rhoncus. Vivamus interdum ante
            iaculis nisl finibus aliquet.
            </p>
        </span>
        <h3 class="text-center">Redes sociais</h3>
        <div class="grid justify-content-around mt-4 align-itens-center">
                <p-button class="col-6 w-7rem h-2rem mb-2 bg-blue-500 border-none" icon="pi pi-twitter" label="Twitter"></p-button>
                <p-button class="col-6 w-7rem h-2rem mb-2 bg-pink-600 border-none" icon="pi pi-instagram" label="Instagram"></p-button>
                <p-button class="col-6 w-7rem h-2rem mb-2 bg-indigo-700 border-none" icon="pi pi-facebook" label="Facebook"></p-button>
                <p-button class="col-6 w-7rem h-2rem mb-2 bg-indigo-400 border-none" icon="pi pi-linkedin" label="Linkedin"></p-button>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
      name: "EditorialComponent",
  })
  </script>
  <style scoped>
  .titulo {
    text-align: center;
    font-size: 32px;
    }
  </style>
  