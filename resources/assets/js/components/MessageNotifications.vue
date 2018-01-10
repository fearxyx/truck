<template>
    <li class="dropdown messages">
        <a href="#" class="dropdown-toggle text-right" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-envelope-o" aria-hidden="true"></i><span class="caret"></span></a>
        <ul class="dropdown-menu dropdown-menu-animated not-dropdown">
            <li v-if="notifi.length > 0" class="clearfix" v-for="notif in notifi" @click="openChat(notif.user_id)">
                <div class="not-avatar"><img :src="notif.profile.avatar" class="profile-img" alt="avatar"></div>
                <div class="text-wrap not-cont">
                    <span class="not-name">{{ notif.profile.name }}</span>
                    <br>
                    <span class="not-message">{{ notif.message.message }}</span>
                </div>
            </li>
            <li class="clearfix" v-if="notifi.length === 0">
                <div class="col-md-12 text-center">Nincs uzenet</div>
            </li>
        </ul>
    </li>
</template>

<script>
    export default {
        props:['notifi'],
        data() {
            return {
            }
        },
        methods:{
            openChat(value){

                const index = this.$root.notifiIds.indexOf(value);
                if (index >= 0) {
                    this.$root.notifiIds.splice( index, 1 );
                    this.$root.notifi.splice( index, 1 );
                    this.$root.userRooms.push(value)
                }
            }
        },
        mounted() {
        }
    }
</script>
git init