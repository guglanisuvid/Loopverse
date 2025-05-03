import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-bg-100 text-text-100 px-16">
      <div className="flex flex-col gap-8 justify-between py-8 border-t-2">
        <div className="flex gap-8 justify-between">
          <div className="flex flex-col gap-4 justify-between items-start">
            <Link
              smooth={true}
              duration={500}
              to="hero"
              className="text-3xl font-secondary hover:cursor-pointer"
            >
              Loopverse
            </Link>
            <a
              href="https://github.com/guglanisuvid/Loopverse.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center gap-2 px-4 py-2 border-2 rounded-lg"
            >
              <span className="text-xl">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>See How It’s Built</span>
            </a>
          </div>
          <div className="flex flex-col gap-8 justify-center items-end text-md text-right text-text-200">
            <div>
              <span>
                Let’s connect and create something extraordinary. Find me on —{" "}
              </span>
              <a
                href="https://www.linkedin.com/in/suvidguglani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-100 font-semibold hover:underline underline-offset-4"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <span>Have questions or ideas? Drop me a mail — </span>
              <a
                href="mailto:suvid.sd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-100 font-semibold hover:underline underline-offset-4"
              >
                suvid.sd@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-text-200 text-sm flex justify-between items-center gap-8">
          <div>© 2025 Loopverse. All rights reserved.</div>
          <div className="flex gap-8 justify-between items-center">
            <a className="cursor-pointer">Terms of Services</a>
            <a className="cursor-pointer">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
