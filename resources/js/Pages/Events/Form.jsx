import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Form(){
    return(
        <AuthenticatedLayout>
            <section className="eventsform">
                <form action={route('events.store')} className="eventsform__form">
                    
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

export default Form;