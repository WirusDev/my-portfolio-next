import React from "react";
import Image from "next/image";
// import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/utils/fontawesome";
const Header: React.FC = () => {
  return (
    <>
      {" "}
      <label
        htmlFor='my-drawer-2'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <div className='menu bg-base-200 text-base-content h-full w-80 p-4 flex flex-col justify-between'>
        {/* Sidebar content here */}
        <div className='flex-1'>
          <Image
            src='/images/Evgenii.jpeg'
            alt='Evgenii Larin'
            className='rounded-md my-1 w-full'
            width={200}
            height={200}
          />
          <div className='flex flex-col text-ledt m-2'>
            <p className='text-accent pb-1'>Full Stack Web-Developer</p>
            <h1 className='text-3xl pb-2'>Evgenii Larin</h1>

            <p>
              I&apos;m a full-stack web developer with a passion for creating
              web applications. I&apos;ve got experience in both front-end and
              back-end development, and I&apos;m always up for new and exciting
              challenges. ;)
            </p>
          </div>

          <div className=' '></div>
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
    </>
  );
};

export default Header;
