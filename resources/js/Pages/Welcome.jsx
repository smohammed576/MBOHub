import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Welcome() {
    const [displayform, setDisplayform] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); 
    const eventsPerPage = 4; 
    const csrf = document.querySelector("meta[name=csrf-token]").getAttribute("content");
    const user = usePage().props.auth.user;
    const events = usePage().props.events;


    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);


    const nextPage = () => {
        if (currentPage < Math.ceil(events.length / eventsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

 
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <GuestLayout>
            <section className="home">
                <div className="heading">
                    <video className="heading__video" controls autoPlay muted>
                        <source
                            src="/src/videos/MBO-HUB_Introductie Video DEF.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <article className="heading__info">
                        <p className="heading__info--text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            quaerat qui quisquam. Incidunt officia molestiae corporis doloribus quae
                            quidem nihil tempora minima consectetur assumenda architecto debitis
                            non, placeat iusto rem!
                        </p>
                    </article>
                </div>

                <div className="events">
                    {user && (
                        <button
                            onClick={() => setDisplayform((value) => !value)}
                            className="events__create"
                        >
                            + Add Event
                        </button>
                    )}

                    {displayform ? (
                        <form action={route("events.store")} method="post" className="events__form">
                            <input type="hidden" name="_token" value={csrf} />
                            <input
                                type="text"
                                name="title"
                                placeholder="Event Title"
                                className="events__form--input"
                            />
                            <input
                                type="date"
                                name="date"
                                className="events__form--date"
                            />
                            <textarea
                                name="information"
                                placeholder="Event Details"
                                className="events__form--textarea"
                            ></textarea>
                            <input
                                type="text"
                                name="location"
                                placeholder="Event Location"
                                className="events__form--input"
                            />
                            <input type="hidden" name="user_id" value={user.id} />
                            <button type="submit" className="events__form--submit">
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div className="events__wrapper">
                            {currentEvents.length > 0 ? (
                                currentEvents.map((event) => {
                                    const truncatedInfo = truncateText(event.information, 15); 

                                    return (
                                        <div className="tile__wrapper" key={event.id}>
                                            <div className="row">
                                                <div className="col-12 col-md-3">
                                                    <div
                                                        className="tile__image tile__image-normal"
                                                        style={{
                                                            backgroundImage: `url(${event.image || 'https://rezista.in/wp-content/uploads/2020/07/Image-Placeholder-Dark.png'})`,
                                                        }}
                                                    ></div>
                                                    <div
                                                        className="tile__image tile__image-wide"
                                                        style={{
                                                            backgroundImage: `url(${event.image || 'https://rezista.in/wp-content/uploads/2020/07/Image-Placeholder-Dark.png'})`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <div className="tile__content">
                                                        <h4 className="calendar-item__title">
                                                            {event.title}
                                                        </h4>
                                                        <span className="calendar-item__date">
                                                            {event.date}
                                                        </span>
                                                        <div className="calendar-item__text">
                                                            <p>
                                                                {truncatedInfo}
                                                                {event.information.split(" ").length > 15 && (
                                                                    <a
                                                                        href={route("events.index")}
                                                                        className="learn-more-link"
                                                                    >
                                                                        Meer informatie 
                                                                    </a>
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="events__empty">No events available</p>
                            )}
                        </div>
                    )}

                    <div className="events__pagination">
                        <button
                            className="events__pagination--btn events__pagination--previous"
                            onClick={prevPage}
                            disabled={currentPage === 1}
                        >
                            ←
                        </button>
                        <button
                            className="events__pagination--btn events__pagination--next"
                            onClick={nextPage}
                            disabled={currentPage === Math.ceil(events.length / eventsPerPage)}
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>

            <section className="welcome">
                <a href="/post" className="welcome__link">
                    <article className="welcome__item">
                        <h3 className="welcome__item--title">POSTS</h3>
                        <p className="welcome__item--info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas
                            laudantium debiti
                        </p>
                    </article>
                </a>
                <a href="/news" className="welcome__link">
                    <article className="welcome__item">
                        <h3 className="welcome__item--title">NEWS</h3>
                        <p className="welcome__item--info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas
                            laudantium debiti
                        </p>
                    </article>
                </a>
                <a href="/contact" className="welcome__link">
                    <article className="welcome__item">
                        <h3 className="welcome__item--title">CONTACT</h3>
                        <p className="welcome__item--info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas
                            laudantium debiti
                        </p>
                    </article>
                </a>
            </section>
        </GuestLayout>
    );
}

export default Welcome;
