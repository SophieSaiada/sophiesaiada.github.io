import React from "react";

import ChipsSection, { BREAK_LINE } from "../chips-section";

const Technologies = () => (
  <ChipsSection
    title="Technologies"
    values={[
      {
        name: "React",
        bold: true,
        icon: { type: "image", src: "/icons/techs/reactjs.svg" }
      },
      {
        name: "TypeScript",
        bold: true,
        icon: { type: "image", src: "/icons/techs/typescript.svg" }
      },
      {
        name: "Python",
        bold: true,
        icon: { type: "image", src: "/icons/techs/python.svg" }
      },
      {
        name: "JavaScript",
        bold: true,
        icon: { type: "image", src: "/icons/techs/javascript.svg" }
      },
      BREAK_LINE,
      {
        name: "AWS (API\xa0Gateway,\xa0Lambda,\xa0SQS)",
        bold: true,
        icon: { type: "image", src: "/icons/techs/aws.svg" }
      },
      {
        name: "Vercel",
        icon: { type: "image", src: "/icons/techs/vercel.svg" }
      },
      { name: "REST" },
      { name: "OpenAPI" },
      {
        name: "MongoDB",
        bold: true,
        icon: { type: "image", src: "/icons/techs/mongodb.svg" }
      },
      BREAK_LINE,
      {
        name: "NextJS",
        icon: { type: "image", src: "/icons/techs/nextjs.svg" }
      },
      {
        name: "Django (PostgreSQL & Oracle DB)",
        icon: { type: "image", src: "/icons/techs/django.svg" }
      },
      { name: "Celery (Redis & RabbitMQ)" },
      BREAK_LINE,
      {
        name: "Kotlin",
        bold: true,
        icon: { type: "image", src: "/icons/techs/kotlin.svg" }
      },
      {
        name: "Swift",
        bold: true,
        icon: { type: "image", src: "/icons/techs/swift.svg" }
      },
      {
        name: "HTML",
        icon: { type: "image", src: "/icons/techs/html5.svg" }
      },
      {
        name: "CSS",
        icon: { type: "image", src: "/icons/techs/css3.svg" }
      },
      {
        name: "Tailwind CSS",
        icon: { type: "image", src: "/icons/techs/tailwindcss.svg" }
      },
      BREAK_LINE,
      { name: "Pytest" },
      {
        name: "Playwright",
        icon: { type: "image", src: "/icons/techs/playwright.svg" }
      },
      {
        name: "Cypress",
        icon: { type: "image", src: "/icons/techs/cypress.svg" }
      },
      { name: "Jest" },
      BREAK_LINE,
      { name: "Git" },
      {
        name: "Bash",
        icon: { type: "image", src: "/icons/techs/bash.svg" }
      },
      {
        name: "CircleCI",
        icon: { type: "image", src: "/icons/techs/circleci.svg" }
      },
      {
        name: "GitHub",
        icon: { type: "image", src: "/icons/techs/github.svg" }
      },
      { name: "BitBucket Pipelines" },
      BREAK_LINE,
      {
        name: "Docker",
        icon: { type: "image", src: "/icons/techs/docker.svg" }
      },
      { name: "Helm" },
      {
        name: "Kubernetes",
        icon: { type: "image", src: "/icons/techs/kubernetes.svg" }
      }
    ]}
  />
);

export default Technologies;
