

import 'es6-promise/auto'
import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import store from 'store'
import router from 'config/routes'
import 'validators'
import 'filters'
import App from 'components/App'

import iView from 'iview';
import 'iview/dist/styles/iview.css';



Vue.use(iView);


sync(store, router)

new Vue({
    el: '#root',
    router,
    store,
    render: h => h(App)
})