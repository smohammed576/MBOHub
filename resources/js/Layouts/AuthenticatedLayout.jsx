import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Navigation from './Navigation';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    return (
        <>
            <Navigation/>
            <main className="main">{children}</main>
        </>
    );
}
