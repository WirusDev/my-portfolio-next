import Link from "next/link";
const Cerise = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='bg-base-200 p-6 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>Beauty Salon</h1>

        <div className='prose'>
          <h2 className='text-2xl'>Projektbeschreibung:</h2>
          <p>
            Dieses Projekt wurde für einen Beauty Salon entwickelt und
            ermöglicht es Kunden, Informationen über den Salon, die Preise und
            Dienstleistungen zu erhalten sowie Termine über das integrierte
            SHORE-Buchungssystem zu vereinbaren. Der gesamte Webseitendesign
            unterstützt zwei Sprachen.
          </p>
          <br />
          <h2 className='text-2xl'>Technologien:</h2>
          <ul>
            <li>
              <strong>TypeScript:</strong> Statische Typisierung für JavaScript.
            </li>
            <li>
              <strong>React:</strong> Bibliothek zur Erstellung von
              Benutzeroberflächen.
            </li>
            <li>
              <strong>Vite:</strong> Entwicklungs- und Build-Tool.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Hilfswerkzeug für die Gestaltung.
            </li>
            <li>
              <strong>SHORE:</strong> Integriertes Buchungssystem.
            </li>
            <li>
              <strong>Instagram API:</strong> Integration zur Anzeige von
              Instagram-Posts.
            </li>
          </ul>
          <br />
          <h2 className='text-2xl'>Funktionen:</h2>
          <ul>
            <li>Zwei-Sprachen Unterstützung.</li>
            <li>Informationen über Dienstleistungen und Preise.</li>
            <li>Online-Buchung über SHORE.</li>
            <li>Integration mit Instagram zur Anzeige von Posts.</li>
          </ul>

          <br />
          <h2 className='text-2xl'>Webseite des Salons:</h2>
          <p>
            <a
              href='https://www.cerise-beauty.de/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              Cerise Beauty Salon
            </a>
          </p>
        </div>
        <Link href='/' className='btn btn-accent mt-4'>
          Zurück
        </Link>
      </div>
    </div>
  );
};

export default Cerise;
