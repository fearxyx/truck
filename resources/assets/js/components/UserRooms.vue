<template>
    <div class="chat">
        <div class="header">
            <span class="name" v-text="this.name"></span>
            <span v-on:click="close()" class="close">x</span>
        </div>
        <div class="scrollbar content">
            <ul v-if="messages !== ''" class="messages" v-chat-scroll>
                <chat-log :messages="messages"></chat-log>
            </ul>
        </div>
        <div class="footer">
            <chat-composer v-on:messagesent="addMessage" :user-id="this.room" :name="this.name" :avatar="this.avatar"></chat-composer>
        </div>
    </div>
</template>

<script>
    export default {
        props:['room'],
        data() {
            return {
                messages:[],
                name:'',
                privateId:'',
                avatar:'',
            }
        },
        methods: {
            close(){
                var index = this.$parent.userRooms.indexOf(this.room);
                if (index >= 0) {
                    this.$parent.userRooms.splice( index, 1 );
                }
            },
            deleteNotifications() {
                const index = this.$root.notifiIds.indexOf(this.room);
                if (index >= 0) {
                    this.$root.notifiIds.splice( index, 1 );
                    this.$root.notifi.splice( index, 1 );
                }
            },
            /**
             * add message
             * @param array
             */
            addMessage(message) {
                // add message to existing messages
                this.messages.push(message);

                // scroll to bottom after new message added
                this.$nextTick(() => {
                    this.scrollToEnd();
                })
            },
            /**
             * to scroll page to end
             * @return void
             */
            scrollToEnd: function() {
                var container = this.$el.querySelector(".content");
                var scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            },
        },
        updated() {
            this.scrollToEnd();
        },
        mounted() {
            this.deleteNotifications();
            var authId = $("#authId").val();
            this.privateId = this.room; // unique id for private chat
            axios.get('/messages/'+this.privateId).then( response=> {
                if(response.data.messages !== undefined){
                    this.messages = response.data.messages;
                }
                this.name = $('#'+this.room).find('.text-wrap').text();
                this.avatar = $('#'+this.room).find('.chat-avatar').find('img').attr('src');
                // scroll to bottom after new message added
                this.$nextTick(() => {
                    this.scrollToEnd();
                });
            });
            // laravel echo to send message to other ends (i.e who join given chatroom)
            Echo.private('chatroom.'+authId)
                .listen('MessagePosted',(e)=>{
                    if(e.user.user_id === this.privateId){
                        this.messages.push({
                            message:e.message.message,
                            name:e.user.name,
                            time:e.message.created_at,
                            avatar:e.user.avatar,
                            type:e.message.type,
                            file_name:e.message.file_name
                        });
                    }
                });
        }

    }
</script>
