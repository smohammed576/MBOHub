import Navigation from "./Navigation";

export default function GuestLayout({ children }) {
    return (
        <>
            <Navigation class="header"/>
            <main className="main">{children}</main>
        </>
    );
}