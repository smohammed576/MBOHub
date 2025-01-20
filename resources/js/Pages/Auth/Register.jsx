import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <section className="login">
                <form className="login__form" onSubmit={submit}>
                    <div className="login__form--wrapper">
                        <label htmlFor="name" value="Name" className="login__form--label">Name</label>

                        <input type="text" id="name" name="name" value={data.name} autoComplete="name" isFocused={true} onChange={(e) => setData('name', e.target.value)} required className="login__form--input" />

                        <InputError message={errors.name} className="login__form--error" />
                    </div>

                    <div className="login__form--wrapper">
                        <label htmlFor="email" value="Email" className="login__form--label">Email</label>

                        <input type="text" id="email" name="email" value={data.email} autoComplete="username" onChange={(e) => setData('email', e.target.value)} required className="login__form--input" />

                        <InputError message={errors.email} className="login__form--label" />
                    </div>

                    <div className="login__form--wrapper">
                        <label htmlFor="password" value="Password" className="login__form--label">Password</label>

                        <input type="password" id="password" name="password" value={data.password} autoComplete="new-password" onChange={(e) => setData('password', e.target.value)} required className="login__form--input" />

                        <InputError message={errors.password} className="login__form--error" />
                    </div>

                    <div className="login__form--wrapper">
                        
                        <label htmlFor="password_confirmation" value="Confirm Password" className="login__form--label">Password confirmation</label>

                        <input type="password" id="password_confirmation" name="password_confirmation" value={data.password_confirmation} autoComplete="new-password" onChange={(e) => setData('password_confirmation', e.target.value)} required className="login__form--input" />


                        <InputError
                            message={errors.password_confirmation}
                            className="login__form--error"
                        />
                    </div>

                    <div className="login__form--request">

                        <a href={route('login')} className="login__form--request-link">Already registered?</a>

                        <button className="login__form--submit" disabled={processing}>Register</button>
                    </div>
                </form>
            </section>
        </GuestLayout>
    );
}
