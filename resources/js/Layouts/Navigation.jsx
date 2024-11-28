import { usePage } from "@inertiajs/react";

function Navigation(){
    const user = usePage().props.auth.user;
    return(
        <header className="header">
            <nav className="header__navigation">
                <a className="header__link" href={route('about.about')}>about</a>
                <a className="header__link" href={route('posts.posts')}>posts</a>
                <p className="header__user">{user.name}</p>
            </nav>
        </header>
    );
}

export default Navigation;