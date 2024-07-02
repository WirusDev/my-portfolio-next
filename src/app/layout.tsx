"use client";

import "./globals.css";
import Footer from "../components/layout/Footer";
import React, { ReactNode } from "react";
import Header from "@/components/layout/Header";

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
