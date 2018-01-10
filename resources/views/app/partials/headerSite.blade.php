<nav class="navbar navbar-default navbar-fixed-top navbar-top" style="">
    <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
            <message-notifications :notifi="notifi"></message-notifications>
            <li class="dropdown profile">
                <a href="#" class="dropdown-toggle text-right" data-toggle="dropdown" role="button" aria-expanded="false"><img src="{{ Auth::user()->profile->avatar }}" class="profile-img"> <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-animated">
                    <li class="profile-img">
                        <img src="{{ Auth::user()->profile->avatar }}" class="profile-img" alt="avatar">
                        <div class="profile-body">
                            <h4>{{ ucwords(Auth::user()->profile->name) }}</h4>
                            <p>{{ Auth::user()->email }}</p>
                        </div>
                    </li>
                    <li class="divider"></li>
                    <li class="class-full-of-rum">
                        <a href="http://localhost:8000/admin/profile">
                            <i class="voyager-person"></i>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <i class="voyager-home"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <form action="http://localhost:8000/admin/logout" method="POST">
                            <input type="hidden" name="_token" value="rzfWn34fotDHGfNPd5psuChRS9giHtFW9NSfb0Ae">
                            <button type="submit" class="btn btn-danger btn-block">
                                <i class="voyager-power"></i>
                                Logout
                            </button>
                        </form>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>