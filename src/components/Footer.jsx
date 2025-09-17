"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#30333C] border-t border-gray-200 px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Section - Logo & Title */}
        <div className="md:w-1/2 w-full">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              {/* Replace this with your logo image */}
              <span className="text-sm font-bold">Logo</span>
            </div>
            <h2 className="text-2xl text-white font-semibold">Enactus York</h2>
          </div>
          <p className="text-zinc-400 mt-4 max-w-md">
            Together, we strive to create lasting impact through innovation,
            leadership, and entrepreneurship at York University.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Programs</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white  mb-3">Socials</h3>
          <div className="flex space-x-4 text-zinc-400">
            <a href="https://www.instagram.com/enactus_york/" className="hover:text-white"><FaInstagram size={22} /></a>
            <a href="https://www.linkedin.com/company/enactusyorku/" className="hover:text-white"><FaLinkedin size={22} /></a>
            <a href="#" className="hover:text-white"><FaXTwitter size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Enactus York. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
