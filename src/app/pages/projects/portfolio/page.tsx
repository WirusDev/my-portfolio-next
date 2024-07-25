import Link from "next/link";
const Portfolio = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='bg-base-200 p-6 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>Portfolio Website</h1>

        <div className='prose'>
          <h2 className='text-2xl'>Projektbeschreibung:</h2>
          <p>
            Dieses Projekt ist ein persönlicher Portfolio-Webseite, die ich mit
            Next.js entwickelt habe. Es war mein erster Versuch mit diesem
            Framework und das Projekt zeigt meine Fähigkeiten in der Erstellung
            dynamischer und responsiver Webanwendungen. Die Seite ermöglicht es
            Nutzern, sich mit meinen Projekten, Erfahrungen und Fähigkeiten
            vertraut zu machen und mit mir in Kontakt zu treten.
          </p>
          <br />
          <h2 className='text-2xl'>Technologien:</h2>
          <ul>
            <li>
              <strong>TypeScript:</strong> Statische Typisierung für JavaScript.
            </li>

            <li>
              <strong>Next.js:</strong> Framework für die Entwicklung
              serverseitig gerenderter Anwendungen.
            </li>
            <li>
              <strong>React:</strong> Bibliothek zur Erstellung von
              Benutzeroberflächen.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Werkzeug für die Gestaltung, das
              eine schnelle und einfache Erstellung von responsiven Designs
              ermöglicht.
            </li>

            <li>
              <strong>Vercel:</strong> Plattform für Deployment und Hosting.
            </li>
          </ul>
          <br />
          <h2 className='text-2xl'>Funktionen:</h2>
          <ul>
            <li>Responsive Design für verschiedene Bildschirmgrößen.</li>
            <li>
              Portfolio-Sektion zur Präsentation meiner Projekte und
              detaillierten Informationen darüber.
            </li>
            <li>Über-mich-Sektion zur Vorstellung meiner Fähigkeiten.</li>
            <li>
              Einfache Anpassung des Aussehens dank der Nutzung von Sass und
              Tailwind CSS.
            </li>
          </ul>
          <br />

          <br />
          <h2 className='text-2xl'>GitHub-Repository:</h2>
          <p>
            <a
              href='https://github.com/WirusDev/my-portfolio-next'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              GitHub - WirusDev/my-portfolio-next
            </a>
          </p>
          <br />
        </div>
        <Link href='/' className='btn btn-accent mt-4'>
          Zurück
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
