import GuestLayout from "@/Layouts/GuestLayout";

function Contact(){
    return(
        <GuestLayout>
            <section className="login">
                <form action={route('contact.mail')} className="login__form">
                    <h2 className="login__title">Contact</h2>
                    <div className="login__form--wrapper">
                        <label htmlFor="message" className="login__form--label">Message</label>
                        <input type="text" id="message" name="message" className="login__form--input" />
                    </div>
                    <div className="login__form--request">
                        <input type="submit" value="Send" className="login__form--submit" />
                    </div>
                </form>
            </section>
        </GuestLayout>
    );
}

export default Contact;