"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectData = [
  {
    imgSrc: "/images/prod/lingoaa.jpg",
    imgAlt: "Lingoaa",
    title: "LingoA&A",
    description: "How to park your car at your garage?",
    link: "/projects/lingoaa",
  },
  {
    imgSrc: "/images/prod/cerise.jpg",
    imgAlt: "Cerise",
    title: "Cerise",
    description: "How to park your car at your garage?",
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
  // Добавьте больше проектов здесь
];

export default function Projects() {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
      {projectData.map((project, index) => (
        <div key={index} className='card bg-base-300 w-fit'>
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
              <Link className='btn btn-neutral btn-sm' href={project.link}>
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
