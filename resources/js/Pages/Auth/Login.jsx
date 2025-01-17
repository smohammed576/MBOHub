import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="login">
                    {status}
                </div>
            )}

        <section className="login">
            <form className="login__form" onSubmit={submit}>
                <div className="login__form--wrapper">
                    <label htmlFor="email" value="Email" className="login__form--label">Email</label>

                    <input id="email" type="email" value={data.email} autoComplete="username" isFocused={true} onChange={(e) => setData('email', e.target.value)} className="login__form--input" />

                    <InputError message={errors.email} className="login__form--error" />
                </div>

                <div className="login__form--wrapper">
                    <label htmlFor="password" value="Password" className="login__form--label">Password</label>
                    <input id="password" type="password" value={data.password} autoComplete="username" isFocused={true} onChange={(e) => setData('password', e.target.value)} className="login__form--input" />

                    <InputError message={errors.password} className="login__form--error" />
                </div>

                <div className="login__form--remember">
                    <input type="checkbox" name="remember" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} className="login__form--remember-checkbox" />
                    <span className="login__form--remember-text">
                        Remember me
                    </span>
                </div>

                <div className="login__form--request">
                    {canResetPassword && (
                        <a href={route('password.request')} className="login__form--request-link">Forgot your password?</a>
                    )}

                    <button type="submit" className="login__form--submit" disabled={processing}>Log in</button>
                </div>
            </form>
        </section>
        </GuestLayout>
    );
}
