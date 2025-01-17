import { usePage } from "@inertiajs/react";

function Navigation(props){
    const user = usePage().props.auth.user;
    console.log(props);
    return(
        <header className={props.class}>
            <a href="/" className="header__logo">
                <img src="/src/images/logo.png" alt="mbohub logo" className="header__logo--image" />
            </a>
            <nav className="header__navigation">
                <a className="header__link" href={route('posts.posts')}>POSTS</a>
                <a className="header__link" href={route('about.about')}>ABOUT</a>
                <a className="header__link" href={route('contact.contact')}>CONTACT</a>
                <a href={route('news.index')} className="header__link">NEWS</a>
                {
                    user ? 
                        <span className="header__user">
                            <div className="header__user--wrapper">
                                <button className="header__user--create">+ CREATE</button>
                                <span className="header__user--options">
                                    <a href={route('posts.create')} className="header__user--options-option">Post</a>
                                    <a href={route('news.create')} className="header__user--options-option">News</a>
                                </span>
                            </div>
                        </span>
                        :
                        <span className="header__auth">
                            <a href={route('login')} className="header__auth--login">LOGIN</a>
                            <a href={route('register')} className="header__auth--register">REGISTER</a>
                        </span>
                }
            </nav>
        </header>
    );
}

export default Navigation;