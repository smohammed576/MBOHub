import { usePage } from "@inertiajs/react";

function Navigation(props){
    const user = usePage().props.auth.user;
    console.log(props);
    return(
        <header className={props.class}>
            <a href="/" className="header__logo">
                <img src="/images/logo.png" alt="mbohub logo" className="header__logo--image" />
            </a>
            <nav className="header__navigation">
                <a className="header__link" href={route('posts.posts')}>POSTS</a>
                <a className="header__link" href={route('about.about')}>ABOUT</a>
                <a className="header__link" href={route('contact.contact')}>CONTACT</a>
                {
                    user ? 
                        <span className="header__user">
                            <p className="header__user--name">{user.name}</p>
                            <a href={route('posts.create')} className="header__user--create">+ CREATE</a>
                        </span>
                        :
                        <span className="header__auth">
                            <a href={route('login')} className="header__auth--link">LOGIN</a>
                            <a href={route('register')} className="header__auth--link">REGISTER</a>
                        </span>
                }
            </nav>
        </header>
    );
}

export default Navigation;