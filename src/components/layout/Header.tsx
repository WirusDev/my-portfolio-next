import React from "react";
import Image from "next/image";
// import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/utils/fontawesome";
import { motion } from "framer-motion";
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
        <div className=''>
          <Image
            src='/images/Evgenii.jpeg'
            alt='Evgenii Larin'
            className='rounded-lg my-1 w-full'
            width={200}
            height={200}
          />
          <div className='flex flex-col text-ledt m-2'>
            <p className='text-accent pb-1'>Full Stack Web-Developer</p>
            <h1 className='text-3xl pb-2'>Evgenii Larin</h1>
          </div>
        </div>
        <div className='flex flex-row  justify-between gap-1 items-center m-2 rounded-md max-w-full p-4 bg-base-100'>
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
    </>
  );
};

export default Header;
