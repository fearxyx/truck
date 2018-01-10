<div class="text-center">
    @if(Session::has('success'))
        <div class="alert alert-success">
            <strong></strong>{{ Session::get('success') }}
        </div>
    @endif
        @if(Session::has('error'))
            <div class="alert alert-danger">
                <strong></strong>{{ Session::get('error') }}
            </div>
        @endif
</div>
