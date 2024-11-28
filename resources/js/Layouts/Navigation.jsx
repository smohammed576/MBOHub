import { usePage } from "@inertiajs/react";

function Navigation(){
    const user = usePage().props.auth.user;
    return(
        <header className="header">
            <nav className="header__navigation">
                <a className="header__link" href={route('posts.posts')}>posts</a>
                <a className="header__link" href={route('about.about')}>about</a>
                <a className="header__link" href={route('contact.contact')}>contact</a>
                {
                    user ? 
                        <p className="header__user">{user.name}</p>
                        :
                        <span className="header__auth">
                            <a href={route('login')} className="header__auth--link">login</a>
                            <a href={route('register')} className="header__auth--link">register</a>
                        </span>
                }
            </nav>
        </header>
    );
}

export default Navigation;