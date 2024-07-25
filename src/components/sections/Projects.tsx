"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const projectData = [
  {
    imgSrc: "/images/prod/portfolio.png",
    imgAlt: "Regen-Bock",
    title: "Regen-Bock",
    description: ["Next.js", "React", "TS", "Vercel"],
    link: "/pages/projects/portfolio",
  },

  {
    imgSrc: "/images/prod/Regen-Bock.png",
    imgAlt: "Regen-Bock",
    title: "Regen-Bock",
    description: ["Web-Seite", "React", "TS", "Vercel"],
    link: "/pages/projects/regenbock",
  },
  {
    imgSrc: "/images/prod/telegram-bot.png",
    imgAlt: "Telegram-Bot",
    title: "Telegram-Bot",
    description: ["Telegram-Bot", "TypeScript", "API", "Back-end"],
    link: "/pages/projects/telegram-bot",
  },
  {
    imgSrc: "/images/prod/Twist.png",
    imgAlt: "twist",
    title: "Twist",
    description: ["Web-App", "React", "TS", "Vercel"],
    link: "/pages/projects/twist",
  },
  {
    imgSrc: "/images/prod/cerise.jpg",
    imgAlt: "Cerise",
    title: "Cerise",
    description: [
      "Termin Buchung-system",
      "Web-Seite",
      "React",
      "TS",
      "Vercel",
    ],
    link: "/pages/projects/cerise",
  },
];

// export default function Projects() {
//   return (
//     <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
//       {projectData.map((project, index) => (
//         <div key={index} className='card bg-base-300 w-full'>
//           <figure>
//             <Image
//               src={project.imgSrc}
//               alt={project.imgAlt}
//               width={200}
//               height={200}
//               className='w-full bg-slate-400'
//             />
//           </figure>
//           <div className='card-body'>
//             <h2 className='card-title'>{project.title}</h2>
//             <p>{project.description}</p>
//             <div className='card-actions justify-end'>
//               <Link className='btn btn-neutral btn-outline' href={project.link}>
//                 Mehr erfahren
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Projects() {
  return (
    <>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
        {projectData.map((project, index) => (
          <div key={index} className=' glass p-2 rounded-lg'>
            {/* <Link href={project.link} className='mb-8'> */}
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
              <Image
                src={project.imgSrc}
                width={256}
                height={256}
                alt={project.imgAlt}
                className='rounded-lg shadow-lg bg-slate-400 cursor-pointer w-full mb-4'
                onClick={() => (window.location.href = project.link)}
              />
            </motion.div>
            {/* </Link> */}

            <div className=''>
              {projectData[index].description.map((desc, index) => (
                <div
                  key={index}
                  className='badge bg-accent  badge-md rounded-md p-2  mr-1 border-none'
                >
                  {desc}
                </div>
              ))}
              {/* <h2 className='text-lg  m-1'>{project.title}</h2> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
