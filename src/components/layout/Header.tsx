import React from "react";
import Image from "next/image";
import Link from "next/link";
// import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/utils/fontawesome";
import { motion } from "framer-motion";
const Header: React.FC = () => {
  return (
    <>
      <label
        htmlFor='my-drawer-2'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <div className='menu bg-base-200 text-base-content h-screen w-80 px-4 flex flex-col justify-between'>
        {/* Sidebar content here */}
        <div className=''>
          <Image
            src='/images/Evgenii.jpeg'
            alt='Evgenii Larin'
            className='rounded-btn my-1 w-full cursor-pointer '
            width={200}
            height={200}
            priority={true}
            onClick={() => (window.location.href = "/")}
          />
          <div className='flex flex-col text-left my-2 z-10 pl-1'>
            <p className='text-secondary pb-1 '>
              Fullstack-Web-Entwickler <br /> mit Hintergrund in Grafikdesign{" "}
            </p>
            <h1 className='text-3xl pb-2'>Evgenii Larin</h1>

            <p className='text-lg'>
              Ich bin ein FullStack-Webentwickler mit Fokus auf React, Next.js,
              Node.js und TypeScript.
            </p>
          </div>

          <br />
          <Link
            href='mailto:hello@ev-dev.de'
            className='btn btn-accent flex items-center space-x-2 my-2'
          >
            <FontAwesomeIcon icon={["fas", "envelope"]} />
            <span>E-Mail</span>
          </Link>
          <Link
            href='tel:+4915140486743'
            className='btn btn-secondary flex items-center space-x-2'
          >
            <FontAwesomeIcon icon={["fas", "phone"]} />
            <span>Call</span>
          </Link>
          <Link
            href='/pages/login'
            className='btn btn-neutral flex items-center space-x-2 mt-2'
          >
            <span>Login</span>
          </Link>
          {/* <Link
            className='btn btn-primary flex items-center space-x-2 my-2'
            href='/contact'
          >
            <FontAwesomeIcon icon={["fas", "file-contract"]} />
            <span>Contact form</span>
          </Link> */}
          <br />
          <br />
          {/* FOOTER */}
          <div className=''></div>
          <div className='flex flex-row  justify-between gap-1 items-center my-2 rounded-btn max-w-full p-4 bg-base-100'>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title='instagram'
              href='https://www.instagram.com/schenjalarin/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent'
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size='2x' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title='telegram'
              href='https://t.me/EvgeniiLari'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent'
            >
              <FontAwesomeIcon icon={["fab", "telegram"]} size='2x' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title='whatsapp'
              href='https://wa.me/+4915140486743'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent'
            >
              <FontAwesomeIcon icon={["fab", "whatsapp"]} size='2x' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title='github'
              href='https://github.com/WirusDev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent'
            >
              <FontAwesomeIcon icon={["fab", "github"]} size='2x' />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
