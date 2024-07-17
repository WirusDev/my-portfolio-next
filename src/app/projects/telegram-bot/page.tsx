import Link from "next/link";

const TelegramBot = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='bg-base-200 p-6 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>Lingoaa Bot</h1>

        <div className='prose'>
          <h2 className='text-2xl'>Projektbeschreibung:</h2>
          <p>
            Dieses Projekt wurde für das Übersetzungsbüro{" "}
            <Link href='https://lingoaa.com/' className='link text-info'>
              LingoA&A
            </Link>{" "}
            entwickelt und ermöglicht es Kunden, schnell mit Lingoaa in Kontakt
            zu treten und schriftliche oder mündliche Übersetzungen anzufordern.
            Benutzer können Dokumente über die Telegram-App senden, und diese
            Dokumente werden dem Übersetzer mit allen notwendigen Informationen
            übermittelt, um die Übersetzung durchzuführen. Der Übersetzer sendet
            die übersetzten Dokumente direkt per E-Mail an den Kunden zurück.
          </p>
          <br />
          <h2 className='text-2xl'>Technologien:</h2>
          <ul>
            <li>
              <strong>TypeScript:</strong> Statische Typisierung für JavaScript.
            </li>
            <li>
              <strong>Telegraf:</strong> Framework zur Erstellung von
              Telegram-Bots.
            </li>
            <li>
              <strong>Axios:</strong> Bibliothek für HTTP-Anfragen.
            </li>
            <li>
              <strong>dotenv:</strong> Verwaltung von Umgebungsvariablen.
            </li>
            <li>
              <strong>Nodemailer:</strong> Bibliothek zum Senden von E-Mails.
            </li>
          </ul>
          <br />
          <h2 className='text-2xl'>Funktionen:</h2>
          <ul>
            <li>Empfang von Dokumenten von Benutzern über Telegram.</li>
            <li>
              Übermittlung der Dokumente an den Übersetzer mit allen notwendigen
              Informationen.
            </li>
            <li>
              Der Übersetzer sendet die übersetzten Dokumente direkt an den
              Kunden per E-Mail.
            </li>
            <li>
              Unterstützung von 10 Sprachen für die Kommunikation mit dem
              Kunden.
            </li>
            <li>Möglichkeit zur Anmeldung für mündliche Übersetzungen.</li>
          </ul>
          <br />

          <h2 className='text-2xl'>GitHub-Repository:</h2>
          <p>
            <a
              href='https://github.com/WirusDev/lingoaa_bot_tel'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              GitHub - WirusDev/lingoaa_bot_tel
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

export default TelegramBot;
