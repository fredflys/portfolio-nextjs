"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>React</li>
        <li>Python</li>
        <li>SQL</li>
        <li>Azure</li>
        <li>Power BI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          2022 - 2024 Master&rsquo;s Degree in Applied Computer Science from
          Fairleigh Dickinson University - Vancouver Campus{" "}
        </li>
        <li>
          2012 - 2016 Bachelor Degree in Liberal Arts from Zhengzhou University
          of Light Industry
        </li>
      </ul>
    ),
  },
];

function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          alt="about"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-8 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="lg:text-lg">This is me. Thank you for taking a look.</p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              Certifications
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((item) => tab === item.id).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
