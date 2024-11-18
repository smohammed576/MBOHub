<header class="header">
    @auth
        <p class="header__name">{{Auth::user()->name}}</p>
    @else
        <a href="{{route('login')}}" class="header__login">login</a>
    @endauth
</header>