"use client";
import React, { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/layout/Footer";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <Analytics />
      <body>
        <div className='drawer lg:drawer-open'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />

          <div className='drawer-content'>
            <div className='flex justify-end'>
              <label
                htmlFor='my-drawer-2'
                className='btn btn-accent drawer-button lg:hidden my-4 uppercase'
              >
                menu
              </label>
              <ThemeSwitcher />
            </div>
            {/* Page content here */}
            <div className='p-4'> {children}</div>

            <Footer />
          </div>
          <div className='drawer-side'>
            <Header />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
