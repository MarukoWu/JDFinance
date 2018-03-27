import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueAwesomeSwiper from "vue-awesome-swiper"


Vue.config.productionTip = false


new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App></App>",
}).$mount("#app")





