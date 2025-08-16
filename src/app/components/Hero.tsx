import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className='max-w-3xl mx-auto text-center'>
        <div className='flex justify-center'>
            <Image src="/profile.avif" alt="Profile Picture" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I&apos;m <span className="text-primary">Do Tien Manh</span></h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">Full Stack Developer | UI/UX Enthusiast | Open Source Contributor</p>

        <div className='flex justify-center items-center gap-6 mb-8'>
          <Link href="/" className="text-2xl textgray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            <FaGithub/>
          </Link>
          <Link href="/" className="text-2xl textgray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            <FaLinkedin/>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/projects"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold 
                      hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300 active:scale-95 w-full md:w-auto text-center"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold 
                      hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300 active:scale-95 w-full md:w-auto text-center"
          >
            Contact Me
          </Link>
        </div>


      </div>


    </section>
  )
}

export default Hero
