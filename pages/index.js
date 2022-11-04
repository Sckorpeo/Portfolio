//External components
import Head from "next/head";
import Image from "next/image";

//Self made components
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

//External icons
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiNodejsSmall } from "react-icons/di";
import { SiJavascript, SiReact, SiExpress, SiPostgresql } from "react-icons/si";

//Assets
import profileImg from "../public/port_img-removebg-preview.png";
import boardGif from "../public/boardgames.gif";
import sabacc from "../public/sabaccCardGame.gif";

export default function Home() {
  return (
    <div className='scroll-smooth'>
      <Head>
        <title>Kieran Brugman Portfolio</title>
        <meta
          name='description'
          content="Kieran Brugman's portfolio website."
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-10 md:px-20 lg:px-40 '>
        <section className=' min-h-screen'>
          <Nav />
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
          <div className='rounded-full relative overflow-hidden h-60 w-60 mt-20 mx-auto bg-gradient-to-b from-greenish-300 mb-8 md:h-96 md:w-96'>
            <Image src={profileImg} layout='fill' objectFit='cover' />
          </div>
        </section>
        <section id='stack' className='py-7'>
          <h3 className='text-2xl py-6 lg:text-center'>My Stack</h3>
          <div className='text-5xl flex justify-center gap-5 text-greenish-300 '>
            <AiFillHtml5 />
            <DiCss3 />
            <SiJavascript />
            <SiReact />
            <DiNodejsSmall />
            <SiExpress />
            <SiPostgresql />
          </div>
        </section>
        <section id='portfolio'>
          <h3 className='text-2xl py-6 lg:text-center'>Projects</h3>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <ProjectCard
              altText={"Board game ecommerce website"}
              title={"The Board Company"}
              codeLink={"https://github.com/Sckorpeo/acme-shopping"}
              viewLink={"https://the-board-company.herokuapp.com/"}
              desc={
                "The Board Company is a B2C Board Game e-commerce website. Users can add products to cart, favorite products, save products for later, purchase products, comment on products. Admins have functionality to edit, add, delete products."
              }
              image={boardGif}
            />
            <ProjectCard
              altText={"A website to explain a star wars card game"}
              title={"5 Card Sabacc"}
              codeLink={"https://github.com/Sckorpeo/5-card-sabacc-prob-calc"}
              viewLink={"https://sabacc-5-card-prob-calc.herokuapp.com/"}
              desc={
                "The Board Company is a B2C Board Game e-commerce website. Users can add products to cart, favorite products, save products for later, purchase products, comment on products. Admins have functionality to edit, add, delete products."
              }
              image={sabacc}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
