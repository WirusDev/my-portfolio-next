"use client";

import "./globals.css";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import React, { ReactNode } from "react";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/utils/fontawesome";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div className='drawer lg:drawer-open'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            {/* Page content here */}
            {children}
            <Footer />
            <label
              htmlFor='my-drawer-2'
              className='btn btn-primary drawer-button lg:hidden'
            >
              Open drawer
            </label>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-2'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <div className='menu bg-base-200 text-base-content h-full w-80 p-4 flex flex-col justify-between'>
              {/* Sidebar content here */}
              <div className='flex-1'>
                <div className='flex flex-col text-left'>
                  <Image
                    src='/images/Evgenii.jpeg'
                    alt='Evgenii Larin'
                    className='rounded-md my-1 w-full'
                    width={200}
                    height={200}
                  />
                  <h1 className='text-3xl'>Evgenii Larin</h1>
                  <p className=''>Full Stack Web-Developer</p>
                </div>
                <div>
                  <a>Sidebar Item 1</a>
                </div>
                <div>
                  <a>Sidebar Item 2</a>
                </div>
                <div className='w-fit'>
                  <ThemeSwitcher />
                </div>
              </div>

              <div className='flex flex-row justify-between gap-1 items-center mx-4 my-2 rounded-md max-w-full p-4 bg-base-100'>
                <a
                  title='instagram'
                  href='https://www.instagram.com/schenjalarin/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent'
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size='2x' />
                </a>
                <a
                  title='telegram'
                  href='https://t.me/EvgeniiLari'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent'
                >
                  <FontAwesomeIcon icon={["fab", "telegram"]} size='2x' />
                </a>
                <a
                  title='whatsapp'
                  href='https://wa.me/015140486743'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent'
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} size='2x' />
                </a>
                <a
                  title='github'
                  href='https://github.com/WirusDev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent'
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size='2x' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
