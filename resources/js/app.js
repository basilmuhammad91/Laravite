import './bootstrap';

import { createApp } from 'vue'

import app from './layouts/app.vue'
import router from './router';

// createApp(app).mount('#app')

createApp(app)
.use(router)
.mount('#app')

// const app = new Vue({
//     el: '#app',
//     router
// });
