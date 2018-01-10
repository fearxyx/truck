<div id="loginModal" class="modal {{ Session::has('login') && !isset($login) ? 'fade in' : 'fade' }}" role="dialog" style="{{ Session::has('login') && !isset($login) ? 'display:block;background: rgba(0, 0, 0, 0.6)' : 'display:none;' }}">
    <div id="close" class="close-modal"></div>
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close close-modal" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">{{ trans('app.prihlasit')  }}</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form" method="POST" action="{{ secure_url(URL::route('login',[], config('app.http'))) }}">
                    {{ csrf_field() }}

                    <div class="form-group{{ $errors->has('email') && Session::has('login') ? ' has-error' : '' }}">
                        <label for="email" class="col-md-4 control-label">{{ trans('app.emailovaAdresa')  }}</label>

                        <div class="col-md-6">
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                            @if ($errors->has('email') && Session::has('login'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group{{ $errors->has('password') && Session::has('login') ? ' has-error' : '' }}">
                        <label for="password" class="col-md-4 control-label">{{ trans('app.heslo')  }}</label>

                        <div class="col-md-6">
                            <input id="password" type="password" class="form-control" name="password" required>

                            @if ($errors->has('password') && Session::has('login'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-8 col-md-offset-4">
                            <button type="submit" class="btn-primary btn">
                                {{ trans('app.prihlasit')  }}
                            </button>
                            <a class="btn btn-link" href="{{ secure_url(URL::route('password.request',[], config('app.http'))) }}">
                                {{ trans('app.forget')  }}
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button  type="button" class="btn btn-default close-modal" data-dismiss="modal">{{ trans('app.zavriet')  }}</button>
            </div>
        </div>

    </div>
</div>