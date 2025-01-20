import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Form(){
    const user = usePage().props.auth.user;
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    console.log(usePage());
    return(
        <AuthenticatedLayout>
            <section className="create">
                <form action={route('posts.store')} method="post" className="create__form">
                    <h3 className="create__form--title">Create a post</h3>
                    <input type="hidden" name="_token" value={csrf} />
                    <div className="create__form--wrapper">
                        <label htmlFor="title" className="create__form--label">Title</label>
                        <input id="title" type="text" className="create__form--input" name="title" placeholder="title" />
                    </div>
                    <div className="create__form--wrapper">
                        <label htmlFor="intro" className="create__form--label">Intro</label>
                        <input id="intro" type="text" className="create__form--input" name="intro" placeholder="intro" />
                    </div>
                    <div className="create__form--wrapper">
                        <label htmlFor="description" className="create__form--label">Description</label>
                        <input id="description" type="text" className="create__form--input" name="description" placeholder="description"/>
                    </div>
                    <div className="create__form--wrapper">
                        <label htmlFor="image" className="create__form--label">Image</label>
                        <input id="image" type="text" className="create__form--input" name="image" placeholder="image" />
                    </div>
                    <input type="hidden" name="author" value={user.name}/>
                    <div className="create__form--submit">
                        <input type="submit" className="create__form--submit-button"/>
                    </div>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

export default Form;