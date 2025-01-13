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
                    <h2 className="single__details--title">{post.title}</h2>
                    {
                        user.name === post.author && (
                            <span className="single__details--functions">
                                <a href={route('posts.edit', [post.id])} className="single__details--functions-edit">edit</a>
                                <form action={route('posts.destroy', [post.id])} className="single__details--functions-form" method="post" >
                                    <input type="hidden" name="_method" value="delete" />
                                    <input type="hidden" name="_token" value={csrf}/>
                                    <input type="submit" value="delete" className="single__details--functions-delete"/>
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
                            <img src="https://rezista.in/wp-content/uploads/2020/07/Image-Placeholder-Dark.png" alt="placeholder image" className="single__image" />
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