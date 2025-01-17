import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

function About(){
    return(
        <GuestLayout>
            <Head title="About"/>
            <section className="about">
                <article className="about__wrapper about__wrapper--purplejam">
                    <h2 className="about__title">Wat is de MBOHUB?</h2>
                    <p className="about__text">
                        De MBO Hub Amsterdam is een baanbrekende samenwerking tussen het ROC van Amsterdam, Mediacollege Amsterdam, HMC en ROC Top. In het kader van het 750-jarig jubileum van Amsterdam is deze unieke alliantie tot stand gekomen. Het doel is om bedrijven, de Gemeente Amsterdam en diverse initiatieven te verbinden met het middelbaar beroepsonderwijs (mbo) voor de deelname aan verschillende projecten en festiviteiten in de stad.
                    </p>
                    <p className="about__text">
                        Deze bijzondere samenwerking erkent de cruciale rol van het mbo in het verleden, heden en de toekomst van Amsterdam. Het mbo heeft niet alleen bijgedragen aan de vorming van de stad zoals we die vandaag kennen, maar zal ook in de toekomst een sleutelrol spelen in de verdere ontwikkeling ervan. Amsterdam is gevormd door het mbo, en dit partnerschap benadrukt met trots de voortdurende bijdrage van het mbo aan de stad.
                    </p>
                    <p className="about__text">
                        De Mbo Hub Amsterdam fungeert als een brug tussen het onderwijs en de bredere gemeenschap. Het biedt een platform waar bedrijven, de gemeente en andere initiatieven direct kunnen samenwerken met mbo-instellingen. Door gezamenlijke inspanningen kunnen zij bijdragen aan projecten en festiviteiten die de diversiteit en creativiteit van het mbo in Amsterdam weerspiegelen. Dit initiatief benadrukt niet alleen de historische betekenis van het mbo voor de stad, maar ook het potentieel ervan om innovatie en groei te stimuleren, en dit is iets waar we met trots naar kijken en met anderen willen delen.
                    </p>
                </article>
                <article className="about__wrapper about__wrapper--orangereds">
                    <h2 className="about__title">Wat kunnen wij voor jou betekenen?</h2>
                    <p className="about__text">
                        Studenten vanuit verschillende opleidingen binnen de Mbo instellingen in Amsterdam werken aan verschillende projecten. Dit kan bijvoorbeeld in de vorm van stageplaatsen, opdrachten voor leerwerkbedrijven of projectonderwijs. Bij iedere aanvraag zullen we jouw wensen in kaart brengen zodat wij kunnen nagaan in welke vorm onze Mbo studenten met deze opdracht aan de slag kunnen gaan.
                    </p>
                </article>
                <article className="about__wrapper about__wrapper--selectiveyellow">
                    <h2 className="about__title">MBO Agenda</h2>
                    <p className="about__text">
                        Deze unieke samenwerking wordt mede mogelijk gemaakt dankzij subsidie vanuit Mbo Agenda van de Gemeente Amsterdam. Wil je meer informatie lezen over de Mbo Agenda? Dan kan op MBO-Agenda 2023-2027 - Sociaal Domein (amsterdam.nl).
                    </p>
                </article>
            </section>
        </GuestLayout>
    );
}

export default About;