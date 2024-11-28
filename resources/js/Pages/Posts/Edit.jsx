import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Edit(){
    const data = usePage().props.post;
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    console.log(data);
    const [form, setForm] = useState({
        title: data.title,
        intro: data.intro,
        description: data.description,
        image: data.image,
        author: data.author

    });
    const editInputs = (event) => {
        const {name, value} = event.target;
        setForm((old) => ({
            ...old,
            [name]: value
        }));
    }
    return(
        <AuthenticatedLayout>
            <section className="edit">
                <form action={route('posts.update', [data.id])} className="edit__form" method="post">
                    <input type="hidden" name="_method" value="PUT" />
                    <input type="hidden" name="_token" value={csrf} />
                    <input type="text" className="edit__input" name="title" value={form.title} onChange={editInputs} />
                    <input type="text" className="edit__input" name="intro" value={form.intro} onChange={editInputs} />
                    <input type="text" className="edit__input" name="description" value={form.description} onChange={editInputs}/>
                    <input type="text" className="edit__input" name="image" value={form.image} onChange={editInputs}/>
                    <input type="hidden" name="author" value={form.author}/>
                    <input type="submit" className="edit__submit" />
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

export default Edit;