import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'
//import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.use(VueFullPage);
Vue.use(VueAgile);


//////CAMBIAR ETIQUETA TITTLE
const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609

    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});
////////////////////
Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init()
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')