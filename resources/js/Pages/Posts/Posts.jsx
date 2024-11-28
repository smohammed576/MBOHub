import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Posts(){
    const posts = usePage().props.posts;
    console.log(posts);
    const getPosts = posts?.map(post => 
        <article className="post" key={post.id}>
            <a href={`post/${post.id}`} className="post__link">
                <h2 className="post__title">{post.title}</h2>
            </a>
            <p className="post__intro">{post.intro}</p>
            {
                post.image ?
                    <img src={post.image} alt={post.title} className="post__image" />
                :
                    <>no image</>

            }
        </article>
    );
    return(
        <AuthenticatedLayout>
            <section className="posts">
                <a href={route('posts.create')} className="posts__create">create post</a>
                <div className="posts__list">
                    {getPosts}
                </div>
            </section>
        </AuthenticatedLayout>
    );
}

export default Posts;