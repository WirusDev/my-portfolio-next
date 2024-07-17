import Link from "next/link";

const ReactBlock = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='bg-base-200 p-6 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>Regen Bock</h1>

        <div className='prose'>
          <h2 className='text-2xl'>Projektbeschreibung:</h2>
          <p>
            Dieses Projekt entstand aus einer wunderschönen Zusammenarbeit.
            Meine Freundin entwarf das Design für ihre Abschlussarbeit an der
            Designschule, und ich setzte ihre Vision mit modernsten Technologien
            um. Mit React, TypeScript, Vite und Tailwind CSS schuf ich eine
            dynamische und ansprechende Webseite, die ihre kreativen Ideen
            perfekt zum Leben erweckt. Es war eine fantastische Erfahrung, ihre
            Designelemente in eine funktionsfähige und ästhetisch ansprechende
            Webseite zu verwandeln, die sowohl Benutzerfreundlichkeit als auch
            visuelle Attraktivität bietet.
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
          </ul>
          <br />
          <h2 className='text-2xl'>Features:</h2>
          <ul>
            <li>
              Minimale Konfiguration für schnellen Start mit React und Vite.
            </li>
            <li>Erweiterbare ESLint-Konfiguration mit typbasierten Regeln.</li>
          </ul>

          <br />
          <h2 className='text-2xl'>GitHub-Repository:</h2>
          <p>
            <a
              href='https://github.com/WirusDev/reactblock'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              GitHub - WirusDev/reactblock
            </a>
          </p>
          <br />

          <h2 className='text-2xl'>Live-Demo:</h2>
          <p>
            <a
              href='https://regen-bock.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              regen-bock.vercel.app
            </a>
          </p>
          <br />
          <h2 className='text-2xl'>Designer:</h2>
          <p>
            Design erstellt von {` `}
            <Link
              href='https://www.an-co-design.de'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              Anastasia Cozarevici
            </Link>
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

export default ReactBlock;
