import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Post(){
    const news = usePage().props.news[0];
    console.log(news);
    const user = usePage().props.users.find((user) => user.id == news.user_id);
    console.log(user);
    return(
        <AuthenticatedLayout>
            <section className="news__post">
                <figure className="news__post--figure">
                    <img src={news.image ? news.image : 'https://rezista.in/wp-content/uploads/2020/07/Image-Placeholder-Dark.png'} alt={news.image ? news.title : 'placeholder image'} className="news__post--figure-image" />
                </figure>
                <div className="news__post--wrapper">
                    <article className="news__post--details">
                        <h2 className="news__post--details-title">{news.title}</h2>
                        <span className="news__post--details-wrapper">
                            <p className="news__post--details-author">{user.name}</p>
                            <p className="news__post--details-date">{new Date(news.created_at).toLocaleDateString('en-UK', { day: 'numeric', month: 'short', year: 'numeric'})}</p>
                        </span>
                    </article>
                    <article className="news__post--description">
                        <h3 className="news__post--description-intro">{news.intro}</h3>
                        <p className="news__post--description-text">{news.description}</p>
                    </article>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}

export default Post;