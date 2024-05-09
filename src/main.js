import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

import App from './App.vue'
import router from './router'

import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'


const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.directive('tooltip', Tooltip);

app.mount('#app')
