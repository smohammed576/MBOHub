import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

function News(){
    const news = usePage().props.news;
    const users = usePage().props.users;
    const dataSets = news?.map(item => 
        <a href={route('news.show', [item])} className="news__item" key={item.id}>
            <figure className="news__item--figure">
                <img src={item.image ? item.image : `https://rezista.in/wp-content/uploads/2020/07/Image-Placeholder-Dark.png`} alt={item.image ? item.title : 'placeholder image'} className="news__item--figure-image" />
            </figure>
            <div className="news__item--wrapper">
                <article className="news__item--info">
                    <h2 className="news__item--info-title">{item.title}</h2>
                    <p className="news__item--info-description">{item.description}</p>
                </article>
                <span className="news__item--details">
                    <p className="news__item--details-author">{users?.find((id) => users.id === news.user_id).name}</p>
                    <p className="news__item--details-date">{new Date(item.created_at).toLocaleDateString('en-UK', {day: 'numeric', month: 'short', year: 'numeric'})}</p>
                </span>
            </div>
        </a>
    );
    return(
        <AuthenticatedLayout>
            <Head title="News" />
            <section className="news">
                <p className="news__amount">{news?.length} NIEUWS BERICHTEN</p>
                <div className="news__list">
                    {dataSets}
                </div>
            </section>
        </AuthenticatedLayout>
    );
}

export default News;