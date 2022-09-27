import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Rating from 'primevue/rating';
import Paginator from 'primevue/paginator';
import Toolbar from 'primevue/toolbar';
import Inplace from 'primevue/inplace';
import CascadeSelect from 'primevue/cascadeselect';
import Dropdown from 'primevue/dropdown';


import '@fortawesome/fontawesome-free/css/all.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'



const app = createApp(App);

app.use(PrimeVue);

app.component('p-cascadeSelect', CascadeSelect)
app.component('p-select', Dropdown)
app.component('p-inplace', Inplace)
app.component('p-toolbar', Toolbar)
app.component('p-paginator', Paginator)
app.component('p-rating', Rating)
app.component('p-button', Button)
app.component('p-menubar', Menubar)
app.component('p-inputText', InputText)
app.component('p-carousel', Carousel)
app.component('p-card', Card)

app.use(store)
app.use(router)
app.mount('#app')
