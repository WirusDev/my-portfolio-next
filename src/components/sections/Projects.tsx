"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectData = [
  // {
  //   imgSrc: "/images/prod/lingoaa.jpg",
  //   imgAlt: "Lingoaa",
  //   title: "LingoA&A",
  //   description: "How to park your car at your garage?",
  //   link: "/projects/lingoaa",
  // },
  {
    imgSrc: "/images/prod/cerise.jpg",
    imgAlt: "Cerise",
    title: "Cerise",
    description: "Beauty Studio Website",
    link: "/projects/cerise",
  },
  {
    imgSrc: "/images/prod/Regen-Bock.png",
    imgAlt: "Regen-Bock",
    title: "Regen-Bock",
    description: "How to park your car at your garage?",
    link: "/projects/regenbock",
  },
  {
    imgSrc: "/images/prod/telegram-bot.png",
    imgAlt: "Telegram-Bot",
    title: "Telegram-Bot",
    description: "How to park your car at your garage?",
    link: "/projects/telegram-bot",
  },
  {
    imgSrc: "/images/prod/Twist.png",
    imgAlt: "twist",
    title: "twist",
    description: "twist",
    link: "/projects/twist",
  },
  {
    imgSrc: "/images/prod/Twist.png",
    imgAlt: "twist",
    title: "twist",
    description: "twist",
    link: "/projects/twist",
  },
];

export default function Projects() {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
      {projectData.map((project, index) => (
        <div key={index} className='card bg-base-300 w-full'>
          <figure>
            <Image
              src={project.imgSrc}
              alt={project.imgAlt}
              width={200}
              height={200}
              className='w-full bg-slate-400'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{project.title}</h2>
            <p>{project.description}</p>
            <div className='card-actions justify-end'>
              <Link className='btn btn-neutral btn-outline' href={project.link}>
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
