import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Post(){
    const post = usePage().props.post;
    const user = usePage().props.auth.user;
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    return(
        <AuthenticatedLayout>
            <section className="single">
                <span className="single__details">
                    <h2 className="single__title">{post.title}</h2>
                    {
                        user.name === post.author && (
                            <span className="post__functions">
                                <a href={route('posts.edit', [post.id])} className="single__edit">edit</a>
                                <form action={route('posts.destroy', [post.id])} className="post__delete" method="post" >
                                    <input type="hidden" name="_method" value="delete" />
                                    <input type="hidden" name="_token" value={csrf}/>
                                    <input type="submit" value="delete"/>
                                </form>
                            </span>
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