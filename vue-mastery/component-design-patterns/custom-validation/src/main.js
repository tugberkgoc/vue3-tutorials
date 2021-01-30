import { createApp } from 'vue'

import MoviePoster from './components/MoviePoster.vue'
import App from './App.vue'

const app = createApp(App)

app.component('movie-poster', MoviePoster)

app.mount('#app')
