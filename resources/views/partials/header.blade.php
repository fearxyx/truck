<nav class="navbar navbar-default navbar-fixed-top">
    <a href="https://www.facebook.com/sharer.php?u={{ 'https://'.trans('app.homeTitle').'/prepravca' }}" target="_blank">
        {{ HTML::image('img/facebook.png', 'facebook', ['class' => 'facebook-header', 'title' => 'facebook'], config('app.img'))}}
    </a>

        <div class="navbar-header">
            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ secure_url(URL::route('home',[], config('app.http'))) }}">
                {{ HTML::image('img/logo.png', 'facebook', ['class' => 'logo', 'title' => 'logo'], config('app.img'))}}
            </a>
        </div>
        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <div class="dropdown-right" style="margin-right: 20px">
                <ul class="menu">
                    <li class="dropdown">
                        <span class="dropdown-toggle" data-toggle="dropdown" role="button"> <span class="lang">{{ strtoupper(app()->getLocale()) }}</span> {{ HTML::image('img/'.app()->getLocale().'.png', 'country', ['class' => 'flags', 'title' => 'flags'], config('app.img'))}}<span class="caret"></span></span>
                        <ul class="dropdown-menu multi-level text-center" role="menu" aria-labelledby="dropdownMenu" style="min-width: 130px;left: -40px;">
                            <li class="text-center"><a class="lang-a" style="display: inline-block !important;" href="https://odvez-to.sk/cz"><span class="lang">CZ</span> {{ HTML::image('img/sk.png', 'CZ', ['class' => 'flags', 'title' => 'flags'], config('app.img'))}}</a></li>
                            <li class="text-center"><a class="lang-a" style="display: inline-block !important;" href="https://odvez-to.sk/en/"><span class="lang">EN</span> {{ HTML::image('img/en.png', 'EN', ['class' => 'flags', 'title' => 'flags'], config('app.img'))}}</a></li>
                            <li class="text-center"><a class="lang-a" style="display: inline-block !important;" href="https://odvez-to.sk/hu/"><span class="lang">HU</span> {{ HTML::image('img/hu.png', 'HU', ['class' => 'flags', 'title' => 'flags'], config('app.img'))}}</a></li>
                            <li class="text-center"><a class="lang-a" style="display: inline-block !important;" href="https://odvez-to.sk/it/"><span class="lang">IT</span> {{ HTML::image('img/it.png', 'IT', ['class' => 'flags', 'title' => 'flags'], config('app.img'))}}</a></li>
                            <li class="text-center"><a class="lang-a" style="display: inline-block !important;" href="https://odvez-to.sk/"><span class="lang">SK</span> {{ HTML::image('img/sk.png', 'SK', ['class' => 'flags', 'title' => 'flags'], config('app.img'))}}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
                              <!-- Right Side Of Navbar -->
        <!-- Authentication Links -->
        @if (Auth::guest())
            <ul class="dropdown-right right-menu login" style="padding:5px;">
                <li><span data-toggle="modal" {{isset($login) ? '' : 'data-target=#loginModal' }} >{{ trans('app.prihlasit')  }}</span></li>
                <li><span data-toggle="modal" {{isset($register) ? '' : 'data-target=#registerModal' }} >{{ trans('app.register')  }}</span></li>
            </ul>
        @else
            <ul class="dropdown-right right-menu" style=>
                <li class="dropdown">
                    <span  class="dropdown-toggle" data-toggle="dropdown" role="menu" aria-expanded="false">
                           <i class="fa fa-user" aria-hidden="true"></i>
                        {{ ucwords(Auth::user()->profile->name) }} <span class="caret"></span>
                    </span>

                    <ul class="dropdown-menu" role="menu">

                        <li><a href="">{{ trans('app.ucet')  }}</a></li>
                        <li><a href="">{{ trans('app.profil')  }}</a></li>
                        <li>
                            <a href="#"
                               onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                {{ trans('app.odhlasit')  }}
                            </a>

                            <form id="logout-form" action="{{ secure_url(URL::route('logout',[], config('app.http'))) }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="left-home"><a href="{{ secure_url(URL::route('home',[], config('app.http'))) }}"> {{ trans('app.home')  }}</a></div>
            <div class="dropdown-left left-menu">
                <ul class="menu">
                    <li class="dropdown">
                        <span class="dropdown-toggle" data-toggle="dropdown" role="button"> {{ trans('app.hladat')  }}<span class="caret"></span></span>
                        <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                            <li><a href=""> {{ trans('app.dopravcu')  }}</a></li>
                            <li><a href=""> {{ trans('app.prepravcu')  }}</a></li>
                            <li><a href=""> {{ trans('app.firmu')  }}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="dropdown-left left-menu">
                <ul class="menu">
                    <li class="dropdown">
                        <span class="dropdown-toggle" data-toggle="dropdown" role="button"> {{ trans('app.add')  }}<span class="caret"></span></span>
                        <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                            <li><a href=""> {{ trans('app.kamion')  }}</a></li>
                            <li><a href=""> {{ trans('app.tovar')  }}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        @endif

            @if (!Auth::guest())
                <li class="dropdown atempt-head header-pridat">
                    <a id="atempt" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <span hidden>{{ $x = Auth::user()->atemptions()->count() }}</span>
                        @if($x > 0)
                            <span class="atempt">!</span>
                            <span class="atempt-alert">{{ $x }}</span>
                        @endif
                    </a>

                    <ul class="dropdown-menu" role="menu">
                        @if($x > 0)
                            @foreach(Auth::user()->atemptions()->limit(10)->get() as $see)

                        @if($see->product == 0)
                            <li class="{{ $see->class }}"><a href="">
                                    @if($see->kind == 0)
                                        {{ trans('app.novaReakcia')  }}
                                    @elseif($see->kind == 1)
                                        {{ trans('app.vybrany')  }}
                                    @elseif($see->kind == 2)
                                        {{ trans('app.hodnoteny')  }}
                                    @endif
                                </a></li>
                        @else
                            <li class="{{ $see->class }}"><a href="">
                                    @if($see->kind == 0)
                                        {{ trans('app.novaReakcia')  }}
                                    @elseif($see->kind == 1)
                                        {{ trans('app.vybrany')  }}
                                    @elseif($see->kind == 2)
                                        {{ trans('app.hodnoteny')  }}
                                    @endif
                                </a></li>
                        @endif
                    @endforeach
                @else
                    <li class="text-center">{{ trans('app.ziadna')  }}</li>
                @endif
            </ul>
        </li>
        @endif
    </div>

</nav>
