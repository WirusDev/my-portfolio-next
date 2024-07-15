import Link from "next/link";
const Twist = () => {
  return (
    <>
      <div className='container mx-auto p-4'>
        <div className='bg-base-200 p-6 rounded-lg shadow-lg'>
          <h1 className='text-4xl font-bold mb-4'>Twister</h1>

          <div className='prose'>
            <h2 className='text-2xl'>Projektbeschreibung:</h2>
            <p>
              Twister ist eine minimale React-Anwendungsvorlage, die mit
              TypeScript und Vite eingerichtet ist. Sie ist für effiziente
              Entwicklung mit Hot Module Replacement (HMR) konzipiert und
              enthält wichtige ESLint-Regeln für die Codequalität. Die Anwendung
              unterstützt mehrere Sprachen (Englisch, Deutsch und Russisch) und
              ermöglicht das Hinzufügen und Löschen von Spielern. Alle Daten
              werden in Cookies gespeichert, sodass sie bei einem Neustart
              erhalten bleiben. Außerdem gibt es eine Informationsseite über das
              Projekt.
            </p>
            <br />
            <h2 className='text-2xl'>Technologien:</h2>
            <ul>
              <li>
                <strong>React:</strong> Bibliothek zur Erstellung von
                Benutzeroberflächen.
              </li>
              <li>
                <strong>TypeScript:</strong> Statische Typisierung für
                JavaScript.
              </li>
              <li>
                <strong>Vite:</strong> Entwicklungs- und Build-Tool mit
                schneller Neuladefunktion.
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Utility-First CSS-Framework für
                benutzerdefinierte Designs.
              </li>
              <li>
                <strong>ESLint:</strong> Tool zur statischen Codeanalyse und
                Qualitätskontrolle.
              </li>
              <li>
                <strong>PostCSS:</strong> Tool zur Verarbeitung von CSS mit
                Plugins.
              </li>
            </ul>
            <br />
            <h2 className='text-2xl'>Features:</h2>
            <ul>
              <li>Schnelle Aktualisierung mit Vite&apos;s HMR.</li>
              <li>TypeScript-Unterstützung für Typsicherheit.</li>
              <li>ESLint-Konfiguration für TypeScript und React.</li>
              <li>
                Unterstützung mehrerer Sprachen (Englisch, Deutsch, Russisch).
              </li>
              <li>
                Hinzufügen und Löschen von Spielern, Daten bleiben in Cookies
                gespeichert.
              </li>
              <li>Informationsseite über das Projekt.</li>
            </ul>
            <br />
            <h2 className='text-2xl'>Projektstruktur:</h2>
            <ul>
              <li>
                <strong>Öffentliche Ordner:</strong> `index.html`,
                Haupt-HTML-Datei der Anwendung.
              </li>
              <li>
                <strong>Source Code (`src`):</strong> Komponenten, Stile und
                TypeScript-Dateien.
              </li>
              <li>
                <strong>Konfigurationsdateien:</strong> `vite.config.ts`,
                `tsconfig.json`, `tailwind.config.js`, `.eslintrc.cjs`.
              </li>
            </ul>
            <br />
            <h2 className='text-2xl'>GitHub-Repository:</h2>
            <p>
              <a
                href='https://github.com/WirusDev/twister'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline'
              >
                GitHub - WirusDev/twister
              </a>
            </p>
            <br />
            <h2 className='text-2xl'>Live-Demo:</h2>
            <p>
              <a
                href='https://twist-two.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline'
              >
                twist-two.vercel.app
              </a>
            </p>
            <br />
          </div>
          <Link href='/' className='btn btn-accent mt-4'>
            Zurück
          </Link>
        </div>
      </div>
    </>
  );
};

export default Twist;
