import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Title from './components/ui/Title.vue'
import Button from './components/ui/Button.vue'

const app = createApp(App)

app.component('title-component', Title)
app.component('button-component', Button)

app.use(store)
app.use(router)
app.mount('#app')
