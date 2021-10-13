import React from "react";
import Image from "next/image";
import { H } from "react-headings";

import GitHubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import EmailIcon from "./icons/email";

import alexWebp from "public/alex.webp";

type SocialButtonProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const SocialButton = ({ icon, title, href }: SocialButtonProps) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-black transition-colors p-2 leading-none"
      aria-label={title}
    >
      {icon}
    </a>
  );
};

const Overview = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mx-auto max-w-5xl">
      <div className="flex justify-center mb-6 sm:mb-0 flex-shrink-0">
        <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 overflow-hidden rounded-full relative shadow-xl bg-gray-100">
          <Image
            src={alexWebp}
            alt="Alex Nault"
            layout="fill"
            sizes="(max-width: 640px) 160px, 240px"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="sm:flex-1 sm:ml-12 md:ml-16">
        <H className="text-center sm:text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8">
          {"Hi, I'm Alex Nault and I solve problems using software."}
        </H>
        <p className="text-gray-500 text-center sm:text-left text-lg md:text-xl mb-3 md:leading-relaxed">
          {
            "I'm currently building solutions at Apprentx as a Software Architect. Previously Classcraft and Ubisoft."
          }
        </p>
        <div className="flex justify-center sm:justify-start space-x-2 sm:-mx-2">
          <SocialButton
            title="GitHub"
            href="https://github.com/alexnault"
            icon={<GitHubIcon />}
          />
          <SocialButton
            title="LinkedIn"
            href="https://www.linkedin.com/in/naultalex"
            icon={<LinkedInIcon />}
          />
          <SocialButton
            title="Twitter"
            href="https://twitter.com/nault_alex"
            icon={<TwitterIcon />}
          />
          <SocialButton
            title="Email"
            href="mailto:nault.alex@gmail.com"
            icon={<EmailIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;