"use client";
import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-3 '>
      <div className='card bg-base-300 w-fit '>
        <figure>
          <Image
            src='/images/prod/lingoaa.jpg'
            alt='Lingoaa'
            width={200}
            height={200}
            className='w-full '
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>LingoA&A</h2>
          <p>How to park your car at your garage?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-neutral'>Learn more</button>
          </div>
        </div>
      </div>
      <div className='card bg-base-300 w-fit '>
        <figure>
          <Image
            src='/images/prod/cerise.jpg'
            alt='Lingoaa'
            width={200}
            height={200}
            className='w-full '
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Cerise</h2>
          <p>How to park your car at your garage?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-neutral'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
