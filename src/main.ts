import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 相关highlight
import 'highlight.js/styles/stackoverflow-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(App)

app.use(createPinia())
app.use(hljsVuePlugin)
app.use(router)

app.mount('#app')
