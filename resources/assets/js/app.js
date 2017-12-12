require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'vuex';
Vue.use(Vuex);

window.moment = require('moment');

window.accounting = require('accounting');

import router from './router';
import store from './store';
import MenuSidebar from './components/MenuSidebar.vue';
import ActivitySidebar from './components/ActivitySidebar.vue';

Vue.component('application-layout', require('./layouts/ApplicationView.vue'));
Vue.component('registration-form', require('./components/Auth/Register.vue'));
Vue.component('back-button', require('./components/BackButton.vue'));

// Global Event Bus
window.Events = new Vue();

// Add the router to every vue instance.
Vue.prototype.router = router;

Vue.prototype.goBack = () => {
    router.go(-1);
};
    
import {Alert} from './utilities';
Vue.prototype.Alert = Alert;

const app = new Vue({
    created() {
        this.$store.commit('setUser', window.App.user);
    },
    el: '#app',
    components: {MenuSidebar, ActivitySidebar},
    router,
    store: store
});
