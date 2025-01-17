import GuestLayout from "@/Layouts/GuestLayout";

function Welcome(){
    return(
        <GuestLayout>
            <section className="heading">
                <video width="720" controls autoPlay muted>
                    <source className="video" src="/src/videos/MBO-HUB_Introductie Video DEF.mp4" type="video/mp4"/>
                </video>
                <article className="heading__info">
                    <p className="heading__info--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quaerat qui quisquam. Incidunt officia molestiae corporis doloribus quae quidem nihil tempora minima consectetur assumenda architecto debitis non, placeat iusto rem!
                    </p>
                </article>
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