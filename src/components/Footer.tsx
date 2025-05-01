'use client';

import Image from 'next/image';
import { StoreButton } from './StoreButton';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiYoutube } from 'react-icons/fi';
import { JSX } from 'react';

interface LinkItem {
  title: string;
  links: string[];
}

const footerLinks: LinkItem[] = [
  {
    title: 'Best bars',
    links: [
      'Best bars in Belgium',
      'Best bars in Brazil',
      'Best bars in Canada',
      'Best bars in Switzerland',
      'Best bars in Germany',
    ],
  },
  {
    title: '',
    links: [
      'Best bars in Spain',
      'Best bars in Italy',
      'Best bars in the Netherlands',
      'Best bars in Portugal',
      'Best bars in the United States',
    ],
  },
  {
    title: 'Quick Links',
    links: ['About Us', 'Contact Us', 'Events', 'Bars', 'Clubs'],
  },
];

const SocialIcon = ({ icon }: { icon: JSX.Element }) => (
  <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full">
    {icon}
  </div>
);

export default function Footer() {
  return (
    <>
      <footer className="bg-[#F7E7C4] pt-10 pb-6 text-black">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white p-5 rounded-3xl w-[300px] flex flex-col items-center">
              <Image
                src="/images/card-1.avif"
                alt="Seeker Logo"
                width={200}
                height={100}
                className="mb-4"
              />
              <div className="flex justify-between w-full items-center">
                <p className="text-sm font-medium">Find your vibe</p>
                <div className="flex gap-2">
                  <SocialIcon icon={<FaInstagram />} />
                  <SocialIcon icon={<AiOutlineFacebook />} />
                  <SocialIcon icon={<FiYoutube />} />
                </div>
              </div>
            </div>

           
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
                        <StoreButton
                          src="/images/google-play.webp"
                          alt="Google Play"
                          title="GET IT ON"
                          store="Google Play"
                          className='flex items-center bg-black/70 text-white px-3 py-2 rounded-md shadow-md'
                        />
                        <StoreButton
                          src="/images/apple.jpg"
                          alt="App Store"
                          title="GET IT ON"
                          store="Apple Store"
                          className='flex items-center bg-black/70 text-white px-3 py-2 rounded-md shadow-md'
                        />
                      </div>
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {footerLinks.map((section, index) => (
              <div key={index}>
                {section.title && (
                  <p className="font-semibold mb-2">{section.title}</p>
                )}
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="hover:underline cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

     
        <div className="mt-10 text-center">
          <p className="font-semibold">Get recent news and updates.</p>
          <div className="mt-4 flex justify-center flex-wrap gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 w-64 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600">
              SUBMIT
            </button>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-orange-500 text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Seeker.social. All rights reserved.
      </div>
    </>
  );
}
