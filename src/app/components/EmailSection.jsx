"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/icons/github-icon.png";
import LinkedInIcon from "../../../public/images/icons/linkedin-icon.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const github_link = "https://github.com/fredflys";
  const linkedin_link = "https://www.linkedin.com/in/fredflys";
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sent) return;

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log("data: ", data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      if (!response.error) {
        setSent(false);
        setError(true);
      } else {
        setSent(true);
        setError(false);
        console.log("Message sent.");
      }
    } else {
      setSent(false);
      setError(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 md:my-12 py-24 gap=4 text-white relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div>
        <h5 className="text-xl font-bold md:my-10 gap-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m on the lookout for new opportunites and my inbox is always
          open. Whether you have a question or say hi, I&apos;ll always get back
          to you as soon as possible. Stay safe!
        </p>
        <div className="social-links flex flex-row gap-2">
          <Link href={github_link}>
            <Image src={GithubIcon} alt="Github Icon" height={50} width={50} />
          </Link>
          <Link href={linkedin_link}>
            <Image
              src={LinkedInIcon}
              alt="Linkedin Icon"
              height={40}
              width={40}
            />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {" "}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@example.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
            ></input>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Hi there!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
            ></input>
          </div>
          {/* <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@example.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
            ></input>
          </div> */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              placeholder="I would like to say..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-green-500 text-sm mt-2">
              Email has been sent successfully. Thank you for reaching out!
            </p>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-2">
              Email could not be sent. Please check your email and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
