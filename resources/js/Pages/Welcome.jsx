import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Welcome(){
    const [displayform, setDisplayform] = useState(false);
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    const user = usePage().props.auth.user;
    const events = usePage().props.events;
    return(
        <GuestLayout>
            <section className="home">
                <div className="heading">
                    <video className="heading__video" controls autoPlay muted>
                        <source src="/src/videos/MBO-HUB_Introductie Video DEF.mp4" type="video/mp4"/>
                    </video>
                    <article className="heading__info">
                        <p className="heading__info--text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quaerat qui quisquam. Incidunt officia molestiae corporis doloribus quae quidem nihil tempora minima consectetur assumenda architecto debitis non, placeat iusto rem!
                        </p>
                    </article>
                </div>
                <div className="events">
                    {
                        user ? 
                            <button onClick={() => {setDisplayform(value => !value)}} className="events__create">+</button>
                        :
                        ''

                    }
                    {
                        displayform ? 
                            <form action={route('events.store')} method="post" className="events__form">
                                <input type="hidden" name="_token" value={csrf} />
                                <input type="text" name="title" placeholder="Title" className="events__form--input" />
                                <input type="date" name="date" className="events__form--date" />
                                <input type="text" name="information" placeholder="Information" className="events__form--input" />
                                <input type="text" name="location" placeholder="Location" className="events__form--input" />
                                <input type="hidden" name="user_id" value={user.id} />
                                <input type="submit" className="events__form--submit" />
                            </form>
                        :
                            <div className="events__wrapper">
                                {
                                    events ? 
                                        events.map(event => 
                                            <article className="events__event" key={event.id}>
                                                <h3 className="events__event--title">{event.title}</h3>
                                                <p className="events__event--date">{event.date}</p>
                                                <p className="events__event--text">{event.information}</p>
                                                <p className="events__event--location">{event.location}</p>
                                            </article>
                                        )
                                    :
                                        <p className="events__empty">empty events</p>
                                }
                            </div>
                    }
                </div>
            </section>
            <section className="welcome">
                <a href="/post" className="welcome__link">
                    <article className="welcome__item">
                        <h3 className="welcome__item--title">POSTS</h3>
                        <p className="welcome__item--info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas laudantium debiti
                        </p>
                    </article>
                </a>
                <a href="/news" className="welcome__link">
                    <article className="welcome__item">
                        <h3 className="welcome__item--title">NEWS</h3>
                        <p className="welcome__item--info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas laudantium debiti
                        </p>
                    </article>
                </a>
                <a href="/contact" className="welcome__link">
                    <article className="welcome__item">
                        <h3 className="welcome__item--title">CONTACT</h3>
                        <p className="welcome__item--info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas laudantium debiti
                        </p>
                    </article>
                </a>
            </section>
            
        </GuestLayout>
    );
}

export default Welcome;