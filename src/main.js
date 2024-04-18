import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/SCSS/main.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far, fab)

const app = createApp(App)

app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')

AOS.init()
