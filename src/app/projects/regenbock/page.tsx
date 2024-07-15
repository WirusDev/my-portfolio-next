import Link from "next/link";

const ReactBlock = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='bg-base-200 p-6 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>ReactBlock</h1>

        <div className='prose'>
          <h2 className='text-2xl'>Projektbeschreibung:</h2>
          <p>
            Dieses Projekt basiert auf React mit TypeScript und Vite. Es
            unterstützt Hot Module Replacement (HMR) und enthält
            ESLint-Konfigurationen zur Sicherstellung hoher Codequalität. Das
            Design der Webseite wurde von meiner Freundin erstellt, die diesen
            Entwurf als Abschlussprojekt in ihrer Designschule entwickelt hat.
          </p>
          <br />
          <h2 className='text-2xl'>Technologien:</h2>
          <ul>
            <li>
              <strong>React:</strong> Bibliothek zur Erstellung von
              Benutzeroberflächen.
            </li>
            <li>
              <strong>TypeScript:</strong> Statische Typisierung für JavaScript.
            </li>
            <li>
              <strong>Vite:</strong> Entwicklungs- und Build-Tool mit schneller
              Neuladefunktion.
            </li>
            <li>
              <strong>ESLint:</strong> Tool zur statischen Codeanalyse und
              Qualitätskontrolle.
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
          <h2 className='text-2xl'>Projektstruktur:</h2>
          <ul>
            <li>
              <strong>components:</strong> React-Komponenten.
            </li>
            <li>
              <strong>pages:</strong> Anwendungsseiten.
            </li>
            <li>
              <strong>public:</strong> Statische Dateien.
            </li>
            <li>
              <strong>styles:</strong> Anwendungsstile.
            </li>
            <li>
              <strong>.eslintrc.cjs:</strong> ESLint-Konfiguration.
            </li>
            <li>
              <strong>tailwind.config.ts:</strong> Tailwind CSS-Konfiguration.
            </li>
            <li>
              <strong>package.json:</strong> Projektabhängigkeiten und Skripte.
            </li>
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
            Design erstellt von{" "}
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
