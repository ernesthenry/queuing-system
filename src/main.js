import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'

import './assets/main.css'
import {queue} from "./modules/queue.js"


const store = createStore({
    modules:{
        queue
    }
})

App.use(store)
createApp(App).mount('#app')
