"use client";

import React from "react";

export default function Timeline() {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex justify-center'>
        <div className='w-px bg-gray-300 h-full'></div>
      </div>
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        <li>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic'>02/2024 - 07/2024</time>
            <div className='text-lg font-black'>
              Weiterbildung zum Full Stack Web Developer
            </div>
            inkl. TypeScript, React, NodeJS etc. <br />{" "}
            <strong>Bei DBE Academy</strong>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10'>
            <time className='font-mono italic'>09/2022 - 01/2024</time>
            <div className='text-lg font-black'>Amazon Kundenservice</div>
            Homeoffice
            <br />+ Selbstschulung, um Entwickler zu werden.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic'>03/2022 - 06/2022</time>
            <div className='text-lg font-black'>Grafikdesigner bei Abihome</div>
            Erstellung und Gestaltung von Abiturzeitungen
            <br />
            Kundenkontakt bezüglich der Anforderungen
            <br />
            Eingesetzte Tools: InDesign, Excel
            <br />
            <a
              href='/arbeitszeugnis_abihome.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              Arbeitzeugnis angucken
            </a>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10'>
            <time className='font-mono italic'>09/2019 - 08/2022</time>
            <div className='text-lg font-black'>
              Ausbildung zum Grafikdesigner
            </div>
            Designschule Schwerin
            <br />
            Schwerpunkt: Content Management
            <br />
            <br />
            Ausgewählte Lerninhalte:
            <br />
            - UI/UX Design
            <br />
            - Adobe Suite
            <br />
            - Suchmaschinenoptimierung
            <br />
            - Content-Management Systeme und Webdesign
            <br />- Plakat-, Logo- und Corporate Design
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic'>2008 - 2019</time>
            <div className='text-lg font-black'>Ehm Welk Schule</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
