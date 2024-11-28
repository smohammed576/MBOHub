import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Post(){
    const post = usePage().props.post;
    const user = usePage().props.auth.user;
    return(
        <AuthenticatedLayout>
            <section className="single">
                <span className="single__details">
                    <h2 className="single__title">{post.title}</h2>
                    {
                        user.name === post.author && (
                            <a href={route('posts.edit', [post.id])} className="single__edit">edit</a>
                        )
                    }
                </span>
                <div className="single__wrapper">
                    {
                        post.image ? 
                            <img src={post.image} alt={post.title} className="single__image" />
                         :
                            <>no image</>
                    }
                    <article className="single__information">
                        <h3 className="single__information--intro">{post.intro}</h3>
                        <p className="single__information--text">{post.description}</p>
                    </article>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}

export default Post;