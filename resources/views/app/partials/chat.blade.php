<div id="wrapper">
    <div id="chatSection">
        <input type="hidden" value="{{ Auth::user()->name }}" id="user_name">
        <input type="hidden" value="{{ Auth::user()->id }}" id="authId">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Freinds
                    </a>
                </li>
                <user-log :users="users" v-on:getcurrentuser="getCurrentUser"></user-log>
            </ul>
        </div>
    </div>
</div>
<div class="room-cont" v-if="userRooms.length > 0">
    <user-rooms v-for="room in userRooms" :key="room" :room="room"></user-rooms>
</div>