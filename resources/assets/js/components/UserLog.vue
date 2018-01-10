<template>
    <div class="user-log">
        <input type="text" class="form-control" placeholder="Search user" v-model="search">
        <li v-if="search === ''" v-for="user in users" class="clearfix" v-bind:key="user.freind_id" @click="activateUser(user.freind_id)" :id="user.freind_id">
            <div class="chat-avatar"><img :src="user.avatar" class="profile-img" alt="avatar"></div>
            <div class="text-wrap">{{ user.name }}</div>
        </li>
        <li class="clearfix" v-if="search != ''" v-for="(user, key) in resoults"  v-bind:key="user.id" @click="activateUser(user)">
            <div class="chat-avatar"><img :src="user.avatar" class="profile-img" alt="avatar"></div>
            <div class="text-wrap">{{ user.name }}</div>
            <i v-if="!user.freinds" v-on:click="add(user,key)" class="fa fa-plus" aria-hidden="true"></i>
            <i v-if="user.freinds" v-on:click="del(user.id,key)" class="fa fa-minus" aria-hidden="true"></i>
        </li>
        <li v-show="users.length === 0" disabled>No friends found</li>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users:[],
                search:'',
                resoults:[]
            }
        },
        watch: {
            search: function (val) {
                if(val !== ''){
                    axios.get('/users/search/'+val).then( response=> {
                        this.resoults = response.data;
                    });
                }else{
                    this.setUsers();
                }
            }
        },
        methods:{
            add(user,key) {
                axios.get('/freinds/store/'+user.id)
                    .then( response=> {
                        this.resoults[key].freinds = true;
                        Vue.swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Friend has be added',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(error => {
                        Vue.swal({
                            position: 'top-end',
                            type: 'error',
                            title: 'Oops...',
                            text: "Something went wrong!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

            },
            del(value,key) {
                axios.get('/freinds/destroy/'+value)
                    .then( response=> {
                        this.resoults[key].freinds = false;
                        Vue.swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'friend has be deleted',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(error => {
                        Vue.swal({
                            position: 'top-end',
                            type: 'error',
                            title: 'Oops...',
                            text: "Something went wrong!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

            },
            activateUser (selectedUser) {
                this.$emit('getcurrentuser',{
                    userId:selectedUser
                });

                // show chat conversation
                $(".activate-chat").show();
                $(".chat-info").hide();
                // to make clicked li active
                $(".user-log .active").removeClass("active");
                $("#"+selectedUser.id).addClass("active");
            },
            setUsers () {
                axios.get('/freinds').then( response=> {
                    this.users = response.data;
                });
            }
        },
        mounted() {
            // get users lists in left sidebar
            this.setUsers();
            var authId = $("#authId").val();
            Echo.private('chatroom.'+authId)
                .listen('MessagePosted',(e)=>{
                    if($('#'+e.user.id).hasClass('hover') === false){
                        $("#"+e.user.id).find(".badge").show();
                        var value = parseInt($("#"+e.user.id).find(".badge").text());
                        if(isNaN(value)){
                            $("#"+e.user.id).find(".badge").html(1);
                        }else{
                            $("#"+e.user.id).find(".badge").html(value+1);
                        }
                    }
                });

        }
    }
</script>