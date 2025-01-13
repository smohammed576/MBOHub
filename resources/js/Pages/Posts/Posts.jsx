import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Posts(){
    const posts = usePage().props.posts;
    console.log(posts);
    const getPosts = posts?.map(post => 
        <div className="post" key={post.id}>
            {
                post.image ?
                    <img src={post.image} alt={post.title} className="post__image" />
                :
                    <img src="https://rezista.in/wp-content/uploads/2020/07/Image-Placeholder-Dark.png" alt="placeholder image" className="post__image" />

            }
            <article className="post__info">
                <a href={`post/${post.id}`} className="post__info--link">
                    <h2 className="post__info--link-title">{post.title}</h2>
                </a>
                <p className="post__info--intro">{post.intro}</p>
            </article>
        </div>
    );
    return(
        <AuthenticatedLayout>
            <section className="posts">
                <p className="posts__amount">{posts?.length} POSTS</p>
                <div className="posts__list">
                    {getPosts}
                </div>
            </section>
        </AuthenticatedLayout>
    );
}

export default Posts;