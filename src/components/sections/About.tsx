"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaBug,
  FaProjectDiagram,
  FaServer,
  FaDocker,
  FaLock,
  FaSyncAlt,
  FaLightbulb,
  FaHandsHelping,
  FaEye,
  FaCreativeCommonsBy,
  FaSearch,
} from "react-icons/fa";
import { TbRoute2 } from "react-icons/tb";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiInstagram,
  SiTelegram,
} from "react-icons/si";
export default function About() {
  const skills = [
    {
      icon: <FaReact />,
      text: "React und Next.js: Ich habe viel Erfahrung in der Erstellung dynamischer Benutzeroberflächen mit React sowie in der Nutzung von serverseitigem Rendering mit Next.js.",
    },
    {
      icon: <SiTypescript />,
      text: "TypeScript: Mit TypeScript mache ich meinen Code sicherer und besser skalierbar, was zu weniger Fehlern und höherer Codequalität führt.",
    },
    {
      icon: <FaNodeJs />,
      text: "Node.js: Ich entwickle serverseitige Anwendungen und APIs mit Node.js, was mir ermöglicht, leistungsstarke Backend-Lösungen zu schaffen.",
    },
    {
      icon: <SiMongodb />,
      text: "MongoDB: Ich arbeite mit MongoDB, einer NoSQL-Datenbank, um Daten effizient zu speichern und zu verwalten.",
    },
    {
      icon: <TbRoute2 />,
      text: "API-Integration: Ich habe Erfahrung in der Integration verschiedener APIs, einschließlich der Arbeit mit Instagram und der Entwicklung von Telegram-Bots.",
    },
    {
      icon: <FaHtml5 />,
      text: "Modernes Webdesign: Ich gestalte ansprechende und funktionale Benutzeroberflächen mit HTML, CSS und Tailwind CSS.",
    },
    {
      icon: <FaGithub />,
      text: "Versionskontrolle: Ich nutze Git und GitHub für die Versionskontrolle und kollaborative Entwicklung.",
    },
    {
      icon: <FaBug />,
      text: "Problembehandlung und Debugging: Ich bin effizient in der Fehlersuche und Problemlösung, was reibungslose Abläufe und optimale Performance sicherstellt.",
    },
    {
      icon: <FaProjectDiagram />,
      text: "Projektmanagement: Ich habe Erfahrung im Management von Projekten, von der Planung bis zur Implementierung und Wartung.",
    },
    {
      icon: <FaServer />,
      text: "Heimserver und Systemadministration: Als Hobby habe ich einen Heimserver mit TrueNAS Scale aufgebaut. Ich habe die gesamte Konfiguration und Wartung des Servers übernommen.",
    },
    {
      icon: <FaDocker />,
      text: "Virtualisierung: Erstellung und Verwaltung von virtuellen Maschinen und Containern (z.B. mit Docker).",
    },
    {
      icon: <FaLock />,
      text: "Sicherheit: Implementierung von Sicherheitsmaßnahmen wie Firewalls, VPNs und SSH-Schlüsseln.",
    },
    {
      icon: <FaSyncAlt />,
      text: "Automatisierung: Nutzung von Skripten und Cron-Jobs zur Automatisierung von Routineaufgaben.",
    },
  ];
  const characteristics = [
    {
      icon: <FaEye />,
      text: "Leidenschaft für Technologie: Ich lerne ständig neue Technologien und Methoden, um die bestmöglichen Lösungen zu entwickeln.",
    },
    {
      icon: <FaSearch />,
      text: "Detailorientiert: Ich arbeite sorgfältig und präzise, was sich in qualitativ hochwertigen Projekten widerspiegelt.",
    },
    {
      icon: <FaLightbulb />,
      text: "Kreativ und innovativ: Ich finde kreative Lösungen für komplexe Probleme und bringe innovative Ansätze in die Entwicklung ein.",
    },
    {
      icon: <FaHandsHelping />,
      text: "Teamplayer: Ich kommuniziere hervorragend und arbeite effektiv in Teams, um gemeinsame Ziele zu erreichen.",
    },
  ];
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-4'>Über mich</h1>

      <div className='prose'>
        <p>
          Ich bin ein FullStack-Webentwickler mit einem Hintergrund in
          Grafikdesign. Meine Arbeit umfasst die Entwicklung leistungsstarker
          und benutzerfreundlicher Webanwendungen, und ich habe umfangreiche
          Erfahrungen mit React, Next.js, Node.js und JavaScript.
        </p>
        <br />
        <h2 className='text-2xl'>Meine Stärken und Fähigkeiten</h2>
        <br />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {skills.map((skill, index) => (
            <div key={index} className='flex  space-x-4'>
              <div className='text-4xl text-primary pt-2'>{skill.icon}</div>
              <p className=''>{skill.text}</p>
            </div>
          ))}
        </div>

        <br />
        <br />
        <h2 className='text-2xl'>Persönliche Eigenschaften</h2>
        <br />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {characteristics.map((skill, index) => (
            <div key={index} className='flex  space-x-4'>
              <div className='text-4xl text-primary pt-2'>{skill.icon}</div>
              <p className=''>{skill.text}</p>
            </div>
          ))}
        </div>

        <br />
        <p>
          Mit meiner Mischung aus technischer Expertise, Kreativität und
          Engagement bin ich bereit, jedes Projekt zu meistern und hochwertige
          Webanwendungen zu liefern.
        </p>
      </div>
    </div>
  );
}
