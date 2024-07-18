import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 p-4 text-white mt-4 flex justify-between'>
      <p>&copy; 2024 Portfolio by Evgenii Larin. </p>
      <p>Alle Rechte vorbehalten.</p>
      <div>
        <Link href='/legal/impressum' className='mr-4'>
          Impressum
        </Link>
        <Link href='/legal/datenschutz'>Datenschutz</Link>
      </div>
    </footer>
  );
};

export default Footer;
