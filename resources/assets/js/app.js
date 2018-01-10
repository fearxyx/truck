import VueRouter from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
Vue.use(VueRouter);
window.Vue = require('vue');
Vue.use(require('vue-chat-scroll'));
Vue.use(VueSweetalert2);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('user-log', require('./components/UserLog.vue'));
Vue.component('user-rooms', require('./components/UserRooms.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));
Vue.component('message-notifications', require('./components/MessageNotifications.vue'));
let Home = require('./components/Home.vue');
const routes = [
    { path: '/prepravca', component: Home }
];
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

const app = new Vue({
    el: '#app',
    router,
    data: {
        userRooms:[],
        users:[],
        notifi:[],
        notifiIds:[],
        profile:[],
        authId: $("#authId").val()
    },
    methods: {
        getCurrentUser(user) {
            if(this.userRooms.indexOf(user.userId) < 0){
                this.userRooms.push(user.userId);
            }
        },
        echoNotifications() {
            Echo.private('chatroom.'+this.authId)
                .listen('MessagePosted',(e)=>{
                var index = this.userRooms.indexOf(e.user.user_id);
            if (0 > index) {
                var indexNotifi = this.notifiIds.indexOf(e.user.user_id);
                if (0 > indexNotifi) {
                    this.notifi.push(
                        {
                            user_id: e.user.user_id,
                            message: {message: e.message.message},
                            profile: {name: e.user.name, avatar: e.user.avatar}
                        }
                    )
                    this.notifiIds.push(e.user.user_id)
                }
            }


        });

        }
    },
    mounted() {
        axios.get('/messages/notifications')
            .then( response=> {
            this.notifi=response.data.messages;
            const notifis = this.notifi=response.data.messages;
            const notifiId = [];
            notifis.forEach(function(item, index){
                notifiId.push(item.user_id)
            });
            this.notifiIds = notifiId;

    })

        axios.get('/user/profile')
            .then( response=> {
                this.profile = response.data;
    })
        this.echoNotifications();
    }
});
