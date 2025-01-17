import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Form(){
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    const user = usePage().props.auth.user;
    return(
        <AuthenticatedLayout>
            <section className="newsform">
                <form action={route('news.store')} method="post" className="newsform__form">
                    <h2 className="newsform__title">Create a news post</h2>
                    <input type="hidden" name="_token" value={csrf} />

                    <span className="newsform__wrapper">
                        <label className="newsform__label" htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" className="newsform__input" placeholder="Title" />
                    </span>
                    <span className="newsform__wrapper">
                        <label className="newsform__label" htmlFor="intro">Intro</label>
                        <input type="text" name="intro" id="intro" className="newsform__input" placeholder="Intro" />
                    </span>
                    <span className="newsform__wrapper">
                        <label className="newsform__label" htmlFor="description">Description</label>
                        <textarea className="newsform__textarea" name="description" placeholder="Type here" id="description"></textarea>
                    </span>
                    <span className="newsform__wrapper">
                        <label className="newsform__label" htmlFor="image">Image (optional)</label>
                        <input type="text" id="image" name="image" className="newsform__input" placeholder="Insert an URL" />
                    </span>
                    <input type="hidden" name="user_id" value={user.id} />
                    
                    <span className="newsform__submit">
                        <input type="submit" className="newsform__submit--button" value="Send" />
                    </span>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

export default Form;