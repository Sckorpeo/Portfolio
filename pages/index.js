//External components
import Head from "next/head";
import Image from "next/image";

//Self made components
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import ClickableIcon from "../components/ClickableIcon";

//External icons
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiNodejsSmall } from "react-icons/di";
import { SiJavascript, SiReact, SiExpress, SiPostgresql } from "react-icons/si";

//Assets
import profileImg from "../public/port_img-removebg-preview.png";
import boardGif from "../public/boardgames.gif";
import sabacc from "../public/sabaccCardGame.gif";
import upref from "../public/upref.gif";
import colorpalette from "../public/palettepicker.gif";

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
            <h2 className='text-4xl py-2 font-bold'>Kieran Brugman</h2>
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
          <div className='text-5xl flex justify-center  gap-16 text-greenish-400 md:text-7xl'>
            <a href='https://www.linkedin.com/in/kieran-brugman/'>
              <AiFillLinkedin />
            </a>
            <a href='https://github.com/Sckorpeo'>
              <AiFillGithub />
            </a>
          </div>
          <div className='rounded-full relative overflow-hidden h-60 w-60 mt-20 mx-auto bg-gradient-to-b from-greenish-300 mb-8 md:h-96 md:w-96'>
            <Image
              src={profileImg}
              className=' object-cover h-[100%] w-[100%] inset-0'
              alt='Image of Kieran Brugman'
            />
          </div>
        </section>
        <section id='stack'>
          <h3 className='text-2xl py-6 md:text-center md:text-4xl md:py-10 font-bold '>
            My Stack
          </h3>
          <div className='text-4xl flex justify-center gap-3 text-greenish-300 md:text-7xl md:gap-7 sm:text-5xl'>
            <ClickableIcon
              text={"HTML5"}
              Icon={AiFillHtml5}
              link={"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"}
            />
            <ClickableIcon
              text={"CSS"}
              Icon={DiCss3}
              link={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            />
            <ClickableIcon
              text={"JavaScript"}
              Icon={SiJavascript}
              link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
            />
            <ClickableIcon
              text={"React.js"}
              Icon={SiReact}
              link={"https://reactjs.org/"}
            />
            <ClickableIcon
              text={"Node.js"}
              Icon={DiNodejsSmall}
              link={"https://nodejs.org/en/docs/"}
            />
            <ClickableIcon
              text={"Express.js"}
              Icon={SiExpress}
              link={"https://expressjs.com/"}
            />
            <ClickableIcon
              text={"PostgreSQL"}
              Icon={SiPostgresql}
              link={"https://www.postgresql.org/"}
            />
          </div>
        </section>
        <section id='portfolio'>
          <h3 className='text-2xl pt-6 md:pt-10 md:text-center md:text-4xl font-bold '>
            Projects
          </h3>
          <div className='flex flex-col gap-10 py-6 md:py-10 lg:flex-row lg:flex-wrap'>
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
                "Static webpage that explains my experience finding Sabacc, why I decided to change the standard rules, and what my new ruleset is. A button towards the bottom of the page leads to a hand probability calculator that a user can test out card probabilities."
              }
              image={sabacc}
            />
            <ProjectCard
              altText={"A color picker palette creator website"}
              title={"Make-A-Palette"}
              codeLink={"https://github.com/Sckorpeo/capstone-color-project"}
              viewLink={"https://kieranb-make-a-palette.herokuapp.com/"}
              desc={
                "Created a React web application that allows the user to create their own color palettes, copy color hex/ rgb/ rgba code to clipboard by clicking the color, and drill down on specific colors to view different hues. Palettes are saved to the client's local storage. No use of external databases. Utilized multiple node packages. The app also employs responsive design for multiple screen sizes."
              }
              image={colorpalette}
            />
            <ProjectCard
              altText={
                "Restaurant preference website landing page and search page"
              }
              title={"U Pref"}
              codeLink={"https://github.com/Sckorpeo/Upref"}
              viewLink={"https://upref-kieran.herokuapp.com/"}
              desc={
                "(Login with Username: cody and Password: 123) Have you ever been to a highly rated restaurant and wondered whats all the hype about? Well Upref was designed to keep your preferences in mind. Set your restaurant preferences and get a customized Upref score."
              }
              image={upref}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
