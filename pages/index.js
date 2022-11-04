import Head from "next/head";
import Image from "next/image";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import profileImg from "../public/port_img-removebg-preview.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kieran Brugman Portfolio</title>
        <meta
          name='description'
          content="Kieran Brugman's portfolio website."
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-10'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-center'>
            <ul className='flex items-center w-[80%] justify-between'>
              <li className=''>About</li>
              <li>Stack</li>
              <li>Portfolio</li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-4xl py-2'>Kieran Brugman</h2>
            <h3 className='text-lg py-2 text-greenish-300'>
              Fullstack Web Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Tax accountant turned programmer -- During my time working as a
              tax accountant, I found myself enjoying debugging tax software for
              my colleagues more than actually preparing taxes. This is what
              started me down the long rabbit hole of programming.
            </p>
          </div>
          <div className='text-5xl flex justify-center text-gray-600 gap-16 text-greenish-400'>
            <a href='https://www.linkedin.com/in/kieran-brugman/'>
              <AiFillLinkedin />
            </a>
            <a href='https://github.com/Sckorpeo'>
              <AiFillGithub />
            </a>
          </div>
          <div className='rounded-full relative overflow-hidden h-60 w-60 mt-20 mx-auto bg-gradient-to-b from-greenish-300'>
            <Image src={profileImg} layout='fill' objectFit='cover' />
          </div>
        </section>
      </main>
    </div>
  );
}
