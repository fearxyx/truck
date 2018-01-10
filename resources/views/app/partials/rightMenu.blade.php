<div class="side-menu sidebar-inverse ps ps--theme_default ps--active-x">
    <nav class="navbar navbar-default" role="navigation">
        <div class="side-menu-container">
            <div class="navbar-header">
                <a class="navbar-brand" href="http://localhost:8000/admin">
                    <div class="logo-icon-container">
                        <img src="/img/logoNew.png" alt="Logo Icon">
                    </div>
                    <div class="title">Odvez-to</div>
                </a>
            </div><!-- .navbar-header -->

            <div class="panel widget center bgimage" style="background-image:url(/vendor/tcg/voyager/assets/images/bg.jpg); background-size: cover; background-position: 0px;">
                <div class="dimmer"></div>
                <div class="panel-content">
                    <img src="{{ Auth::user()->profile->avatar }}" class="avatar" alt="avatar">
                    <h4>{{ ucwords(Auth::user()->profile->name) }}</h4>
                    <p>{{ Auth::user()->email }}</p>

                    <a href="http://localhost:8000/admin/profile" class="btn btn-primary">Profile</a>
                    <div style="clear:both"></div>
                </div>
            </div>

        </div>

        <ul class="nav navbar-nav">
            <li class="dropdown">
                <a href="#tools-dropdown-element" data-toggle="collapse" aria-expanded="false" target="_self">
                    <div class="icon livicon-evo midle" data-options="eventOn: parent;name: search.svg;size: 25px;style: solid;tryToSharpen: true"></div>
                    <span class="title">Search</span>
                </a>
                <div id="tools-dropdown-element" class="panel-collapse collapse ">
                    <div class="panel-body">
                        <ul class="nav navbar-nav">
                            <li class="">
                                <router-link :to="'/prepravca'" target="_self">
                                    <div class="icon livicon-evo midle" data-options="eventOn: parent;name: box.svg;size: 25px;style: solid;tryToSharpen: true"></div>
                                    <span class="title">Prepravcu</span>
                                </router-link>
                            </li>
                            <li class="">
                                <router-link :to="'/dopravca'" target="_self">
                                    <div class="icon livicon-evo midle" data-options="eventOn: parent;name: truck.svg;size: 25px;style: solid;tryToSharpen: true"></div>
                                    <span class="title">Dopravcu</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="dropdown">
                <a href="#search-dropdown-element" data-toggle="collapse" aria-expanded="false" target="_self">
                    <div class="icon livicon-evo midle" data-options="eventOn: parent;name: box-add.svg;size: 25px;style: solid;tryToSharpen: true"></div>
                    <span class="title">Search</span>
                </a>
                <div id="search-dropdown-element" class="panel-collapse collapse ">
                    <div class="panel-body">
                        <ul class="nav navbar-nav">
                            <li class="">
                                <router-link :to="'/prepravca'" target="_self">
                                    <div class="icon livicon-evo midle" data-options="eventOn: parent;name: box.svg;size: 25px;style: solid;tryToSharpen: true"></div>
                                    <span class="title">Prepravcu</span>
                                </router-link>
                            </li>
                            <li class="">
                                <router-link :to="'/dopravca'" target="_self">
                                    <div class="icon livicon-evo midle" data-options="name: truck.svg;size: 25px;style: solid;tryToSharpen: true"></div>
                                    <span class="title">Dopravcu</span>
                                </router-link>
                            </li>
                            <li class="">
                                <router-link :to="'/firmu'" target="_self">
                                    <div class="icon livicon-evo midle" data-options="name: building.svg;size: 25px;style: solid;tryToSharpen: true"></div>
                                    <span class="title">Company</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>


        </ul>

    </nav>
    <div class="ps__scrollbar-x-rail" style="width: 60px; left: 0px; bottom: 0px;">
        <div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 14px;">
        </div>
    </div>
    <div class="ps__scrollbar-y-rail" style="top: 0px; right: 0px;">
        <div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 0px;">
        </div>
    </div>
</div>