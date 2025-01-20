import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    return (
        <>
            <Navigation class="header"/>
            <main className="main">{children}</main>
            <Footer/>
        </>
    );
}