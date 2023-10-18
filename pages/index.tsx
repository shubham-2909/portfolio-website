import Head from 'next/head'
import { BiHardHat } from 'react-icons/bi'
import { BsChevronDoubleDown } from 'react-icons/bs'
import {
  FaAws,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import { GiPinata } from 'react-icons/gi'
import { GrMysql } from 'react-icons/gr'
import { ImCss3, ImHtmlFive2 } from 'react-icons/im'
import {
  SiCanva,
  SiCplusplus,
  SiCypress,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGmail,
  SiGooglecloud,
  SiHeroku,
  SiHiveBlockchain,
  SiJavascript,
  SiLinkedin,
  SiLinux,
  SiMocha,
  SiMongodb,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiWeb3Dotjs,
} from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'
import SkillsStyles from '../styles/Skills.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Gandhi Shubham</title>
        <meta name='description' content='Portfolio for Gandhi Shubham' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <a id='home'></a>
      <div>
        <div className='pt-16 md:mx-32 md:pt-44'>
          <div className='md:flex md:justify-between'>
            <div>
              <div className='flex space-x-4 justify-center mb-16 md:flex md:flex-col md:space-y-4 md:items-center md:my-16 md:mx-5'>
                <div className={SkillsStyles.tooltip}>
                  <a href='https://github.com/shubham-2909'>
                    {/* <SiGithub size={25} /> */}
                  </a>
                  <span className={SkillsStyles.tooltiptext}>GitHub</span>
                </div>

                <div className={SkillsStyles.tooltip}>
                  <a
                    href='https://www.linkedin.com/in/shubham-gandhi-359b3a205/'
                    target='blank'
                  >
                    <SiLinkedin size={25} />
                  </a>
                  <span className={SkillsStyles.tooltiptext}>Linkedin</span>
                </div>
                <div className={SkillsStyles.tooltip}>
                  <a href='https://github.com/shubham-2909' target='blank'>
                    <SiGithub size={25} />
                    <span className={SkillsStyles.tooltiptext}>GitHub</span>
                  </a>
                </div>

                <div className={SkillsStyles.tooltip}>
                  <a href='mailto:gandhishubham234@gmail.com' target='blank'>
                    <SiGmail size={25} />
                  </a>
                  <span className={SkillsStyles.tooltiptext}>Mail</span>
                </div>
              </div>
            </div>
            <div className='items-center mx-12 grow flex flex-col md:items-start'>
              <h1 className='text-6xl flex items-center font-bold mb-4'>
                Gandhi Shubham
              </h1>
              <h1 className='text-2xl mb-4 text-green-400'>
                Software Developer
              </h1>
              <p className='mb-12'>
                I&apos;m Gandhi Shubham a software developer
                <br />I am a Full Stack Web Developer that loves tinkering with
                Blockchain and NextJS.
              </p>
              <a
                className='bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold'
                href='mailto:gandhishubham234@gmail.com'
                target='blank'
              >
                Say Hello
              </a>
            </div>
          </div>
          <div className=''>
            <a
              className='flex justify-center mt-20 space-x-4 items-center'
              href='#about'
            >
              <BsChevronDoubleDown />
              <div>Scroll down</div>
              <BsChevronDoubleDown />
            </a>
          </div>
        </div>
      </div>

      <a id='about'></a>
      <div>
        <div className='pt-28 md:mx-32 md:pt-44 flex flex-col items-center'>
          <h1 className='text-5xl font-semibold mb-4'>About Me</h1>
          <h1 className='text-2xl mb-4 text-green-400'>My Introduction</h1>
          <div className='flex flex-col space-y-12 md:space-x-32 justify-center items-center md:items-start md:flex-row'>
            <Image
              className='h-72 w-72 rounded-xl object-cover'
              src='/ShubhamDp.jpg'
              width={288}
              height={288}
              alt='My picture'
            />
            <div className='flex flex-col space-y-20 justify-center items-center grow mx-12 md:items-start'>
              <p>
                I&apos;m well versed in the technical domains of Web Development
                and Blockchain.
                <br />
                Currently I&apos;m an Undergraduate student at the{' '}
                <a href='https://www.iiitm.ac.in/index.php/en/' target='blank'>
                  Indian Institute of Information Technology, Gwalior
                </a>{' '}
                majoring in Computer Science and Engineering.
                <br />
                Feel free to reach out to me in case of any internship or job
                opportunites as well.
              </p>
              <a
                className='bg-green-500 text-white p-4 flex w-44 text-1xl rounded-xl justify-around font-semibold'
                download
                href='https://drive.google.com/file/d/1LoIF-QKc8mthgAseMitXszbbQaIm-dr2/view?usp=sharing'
                target='blank'
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <a id='skills'></a>
      <div>
        <div className='pt-28 md:mx-32 md:pt-44 flex flex-col items-center'>
          <h1 className='text-5xl font-semibold mb-4'>Skills</h1>
          <h1 className='text-2xl mb-4 text-green-400'>My Technical Skills</h1>
          <div className='grid grid-cols-4 md:grid-cols-12 gap-x-8 gap-y-8'>
            {/* <div className={SkillsStyles.Techs}> */}
            <div className={SkillsStyles.tooltip}>
              <SiCplusplus size={50} />
              <span className={SkillsStyles.tooltiptext}>C++</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiJavascript size={50} />
              <span className={SkillsStyles.tooltiptext}>Javascript</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiTypescript size={50} />
              <span className={SkillsStyles.tooltiptext}>Typescript</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <FaPython size={50} />
              <span className={SkillsStyles.tooltiptext}>Python</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <FaReact size={50} />
              <span className={SkillsStyles.tooltiptext}>React</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiRedux size={50} />
              <span className={SkillsStyles.tooltiptext}>Redux</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiNextdotjs size={50} />
              <span className={SkillsStyles.tooltiptext}>NextJs</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <ImHtmlFive2 size={50} />
              <span className={SkillsStyles.tooltiptext}>HTML</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <ImCss3 size={50} />
              <span className={SkillsStyles.tooltiptext}>CSS</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <FaSass size={50} />
              <span className={SkillsStyles.tooltiptext}>Sass</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiTailwindcss size={50} />
              <span className={SkillsStyles.tooltiptext}>Tailwind CSS</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiMui size={50} />
              <span className={SkillsStyles.tooltiptext}>Material UI</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <FaBootstrap size={50} />
              <span className={SkillsStyles.tooltiptext}>Bootstrap</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiNpm size={50} />
              <span className={SkillsStyles.tooltiptext}>npm</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <FaNodeJs size={50} />
              <span className={SkillsStyles.tooltiptext}>NodeJS</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiExpress size={50} />
              <span className={SkillsStyles.tooltiptext}>Express</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiMongodb size={50} />
              <span className={SkillsStyles.tooltiptext}>MongoDB</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiPostgresql size={50} />
              <span className={SkillsStyles.tooltiptext}>PostgreSQL</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <GrMysql size={50} />
              <span className={SkillsStyles.tooltiptext}>MySQL</span>
            </div>
            {/* <div className={SkillsStyles.tooltip}><SiSolidity size={50}/><span className={SkillsStyles.tooltiptext}>Solidity</span></div> */}
            <div className={SkillsStyles.tooltip}>
              <SiSocketdotio size={50} />
              <span className={SkillsStyles.tooltiptext}>Socket.io</span>
            </div>

            <div className={SkillsStyles.tooltip}>
              <SiGit size={50} />
              <span className={SkillsStyles.tooltiptext}>Git</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiGithub size={50} />
              <span className={SkillsStyles.tooltiptext}>GitHub</span>
            </div>
            {/* <div className={SkillsStyles.tooltip}><SiGithubactions size={50}/><span className={SkillsStyles.tooltiptext}>GitHub Actions</span></div> */}
            <div className={SkillsStyles.tooltip}>
              <SiGitlab size={50} />
              <span className={SkillsStyles.tooltiptext}>GitLab</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiGooglecloud size={50} />
              <span className={SkillsStyles.tooltiptext}>
                Google Cloud Platform
              </span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiFirebase size={50} />
              <span className={SkillsStyles.tooltiptext}>Firebase</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiWeb3Dotjs size={50} />
              <span className={SkillsStyles.tooltiptext}>Web3</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiPostman size={50} />
              <span className={SkillsStyles.tooltiptext}>Postman</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <BiHardHat size={50} />
              <span className={SkillsStyles.tooltiptext}>HardHat</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiHeroku size={50} />
              <span className={SkillsStyles.tooltiptext}>Heroku</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiVercel size={50} />
              <span className={SkillsStyles.tooltiptext}>Vercel</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiNetlify size={50} />
              <span className={SkillsStyles.tooltiptext}>Netlify</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiLinux size={50} />
              <span className={SkillsStyles.tooltiptext}>Linux</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiHiveBlockchain size={50} />
              <span className={SkillsStyles.tooltiptext}>BlockChain</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiUbuntu size={50} />
              <span className={SkillsStyles.tooltiptext}>Ubuntu</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <FaAws size={50} />
              <span className={SkillsStyles.tooltiptext}>AWS</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <GiPinata size={50} />
              <span className={SkillsStyles.tooltiptext}>Pinata</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiCanva size={50} />
              <span className={SkillsStyles.tooltiptext}>Canva</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiMocha size={50} />
              <span className={SkillsStyles.tooltiptext}>Mocha</span>
            </div>
            <div className={SkillsStyles.tooltip}>
              <SiCypress size={50} />
              <span className={SkillsStyles.tooltiptext}>Cypress</span>
            </div>
            {/* <div className={SkillsStyles.tooltip}><SiAdobephotoshop size={50}/><span className={SkillsStyles.tooltiptext}>Photoshop</span></div> */}
            {/* <div className={SkillsStyles.tooltip}><SiPhotopea size={50}/><span className={SkillsStyles.tooltiptext}>Photopea</span></div> */}
            {/* <div className={SkillsStyles.tooltip}><CgFigma size={50}/><span className={SkillsStyles.tooltiptext}>Figma</span></div> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      <a id='experience'></a>

      <div className='pt-28 md:mx-32 md:pt-44 flex flex-col items-center'>
        <h1 className='text-5xl font-semibold mb-4'>Experience</h1>
        <h1 className='text-2xl mb-4 text-green-400'>My Work So Far</h1>
        <div className='flex flex-col ml-6'>
          <div className='flex space-x-8 md:space-x-32 my-8'>
            <div className=''>
              <div className='inline-block h-8 w-20 rounded-full'>
                <img
                  className='rounded-full'
                  src='https://www.scopex.money/images/logo_green.png'
                />
              </div>
              <div className='block w-1 h-full bg-green-400 ml-7'></div>
            </div>
            <div>
              <h1 className='text-2xl mb-4'>
                Full Stack Web Developepment Intern
              </h1>
              <h1 className='text-2xl mb-4 text-green-400'>
                ScopeX, Cross-border financial services
              </h1>
              <div>
                <h1 className='flex space-x-4 items-center'>
                  <SlCalender />
                  <div>February 2023 - August-2023</div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a id='projects'></a>
      <div>
        <div className='pt-28 md:mx-32 md:pt-48 flex flex-col items-center'>
          <h1 className='text-5xl font-semibold mb-4'>Projects</h1>
          <h1 className='text-2xl mb-4 text-green-400'>
            Things I&apos;ve Created
          </h1>
          <div className='grid grid-cols-1 gap-y-8'>
            <div className='flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4'>
              <h1 className='text-3xl font-semibold pb-4'>NexChat</h1>
              {/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
              <p className=''>
                Realtime messaging Adding friends and sending friend requests
                via email.
              </p>
              <p className=''>Performant database queries with Redis.</p>
              <p className=''>Responsive UI built with TailwindCSS.</p>
              <p className=''>Google authentication using next auth.</p>
              <div className='flex gap-3 items-center justify-center'>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://github.com/shubham-2909/Chat-App'
                  target='blank'
                >
                  View on GitHub
                </a>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://nexchat-red.vercel.app/'
                  target='blank'
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className='flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4'>
              <h1 className='text-3xl font-semibold pb-4'>
                NFT MarketPlace Wesite
              </h1>
              {/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
              <p className=''>
                Developed a decentralized NFT MarketPlace using Solidity smart
                contracts and IPFS; NFT MarketPlace where people can buy,list
                and resell their NFTs.
              </p>
              <p className=''>
                Made a single-page interface as an application interface using
                NextJS and TailwindCSS and optimized it up to 85\%.
              </p>
              <p className=''>
                Deployed NFTs on Sepolia Ethereum Test Network using HardHat.
              </p>
              <p className=''>
                Tech Stack: Solidity, Web 3.0, Pinata, NextJS, TailwindCSS ,
                HardHat , ethers, Chai.
              </p>
              <div className='flex gap-3 items-center justify-center'>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://github.com/shubham-2909/nft_martetplace_client'
                  target='blank'
                >
                  View Client code on GitHub
                </a>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://github.com/shubham-2909/nft-marketplace-dapp'
                  target='blank'
                >
                  View Blockchain code GitHub
                </a>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://nft-martetplace-client.vercel.app/'
                  target='blank'
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className='flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4'>
              <h1 className='text-3xl font-semibold pb-4'>My Blog Website</h1>
              {/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}

              <p className=''>
                A Blog Website where i created some blogs about solidity and
                NextJS using markdown files
              </p>
              <p className=''>Nice UI Built using NextJs and Module Css</p>
              <p className=''>Deployed Live on Vercel</p>

              <div className='flex gap-3 items-center justify-center'>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://github.com/shubham-2909/my-blog-app'
                  target='blank'
                >
                  View on GitHub
                </a>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://my-blog-app-gamma.vercel.app/'
                  target='blank'
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className='flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4'>
              <h1 className='text-3xl font-semibold pb-4'>Portfolio Website</h1>
              {/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
              <p className=''>
                Personal portfolio website. Created using NextJS and hosted on
                Vercel.
              </p>
              <div className='flex gap-3 items-center justify-center'>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://github.com/shubham-2909/portfolio-website'
                  target='blank'
                >
                  View on GitHub
                </a>
                <a
                  className='bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4'
                  href='https://shubham-2909.vercel.app/'
                  target='blank'
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <a
            className='bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold mt-12'
            href='https://github.com/shubham-2909'
            target='blank'
          >
            View All
          </a>
        </div>
      </div>

      <footer>
        <div className='pt-28 md:mx-32 mb-16 md:pt-48 flex flex-col items-center'>
          <h1 className='text-5xl font-semibold mb-4'> Gandhi Shubham</h1>
          <h1 className='text-2xl mb-4 text-green-400'>Reach Out</h1>
          <div className='flex space-x-4 items-center my-16 mx-5'>
            <div className={SkillsStyles.tooltip}>
              <a href='https://github.com/shubham-2909' target='blank'>
                <SiGithub size={25} />
              </a>
              <span className={SkillsStyles.tooltiptext}>GitHub</span>
            </div>

            <div className={SkillsStyles.tooltip}>
              <a
                href='https://www.linkedin.com/in/shubham-gandhi-359b3a205/'
                target='blank'
              >
                <SiLinkedin size={25} />
              </a>
              <span className={SkillsStyles.tooltiptext}>Linkedin</span>
            </div>

            <div className={SkillsStyles.tooltip}>
              <a href='mailto:gandhishubham234@gmail.com' target='blank'>
                <SiGmail size={25} />
              </a>
              <span className={SkillsStyles.tooltiptext}>Mail</span>
            </div>
          </div>
          <h1>All rights reserved</h1>
        </div>
      </footer>
    </div>
  )
}

export default Home
