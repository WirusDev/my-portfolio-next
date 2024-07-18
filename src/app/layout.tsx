"use client";
import React, { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Link from "next/link";
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='de'>
      <body>
        <div className='drawer lg:drawer-open'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />

          <div className='drawer-content'>
            <div className='flex justify-between px-4'>
              <div className='p-4'>
                <h3 className='text-3xl '>
                  <Link href='/'>
                    <strong className='text-accent text-righ underline underline-offset-4 uppercase'>
                      Portfolio
                    </strong>
                  </Link>
                </h3>
                <p>by Evgenii Larin </p>
              </div>
              <label
                htmlFor='my-drawer-2'
                className='btn btn-accent drawer-button lg:hidden my-4 uppercase'
              >
                Kontakt
              </label>
              {/* <ThemeSwitcher /> */}
            </div>
            {/* Page content here */}
            <div className='p-4'> {children}</div>
            <Footer />
          </div>
          <div className='drawer-side'>
            <Header />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
