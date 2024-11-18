<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>MBO Hub</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://use.typekit.net/hkl5stp.css">

        <!-- Styles / Scripts -->
        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @vite(['resources/css/app.css', 'resources/js/app.js'])
        @endif
    </head>
    <body>
        <x-app-layout>
            <section class="heading">
                <img src="https://mbo-hub.amsterdam/images/mbo-hub-home.png" alt="banner" class="heading__banner">
            </section>
            <main class="main">
                <section class="information">
                    <p class="information__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint praesentium doloremque facere est perspiciatis fugiat soluta, magnam explicabo labore culpa ullam veritatis cupiditate dignissimos fuga maxime numquam similique iusto omnis.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam omnis est doloremque illo provident dolorum doloribus, excepturi magnam quasi veritatis voluptatem? Similique nesciunt ipsam autem. Doloribus rem libero sit!
                    </p>
                </section>
            </main>
        </x-app-layout>
    </body>
</html>
