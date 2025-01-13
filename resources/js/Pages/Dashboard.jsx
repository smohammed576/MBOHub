import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <section className="dashboard">
                dashboard
            </section>
        </AuthenticatedLayout>
    );
}
