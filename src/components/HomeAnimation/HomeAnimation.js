import Lottie from 'react-lottie-player';
import  Typewriter from 'typewriter-effect';
import lottieJson  from '../../assets/coding.json';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../General/Button';
import { Link } from 'react-scroll';

const HomeAnimation = () => {

  return (
    <div className='h-[calc(100vh-6rem)]' name='home'>
      <div className='container max-w-6xl mx-auto px-4 md:px-10 py-4 h-full mb-8 md:mb-12 lg:mb-20'>
        <div className="flex flex-col items-center justify-start h-full gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
              <div className='mb-2 overflow-hidden text-center md:text-left'>
                <h2 className='text-4xl text-title font-bold animate-moveRight' id='title1'>Hi there</h2>
                <h2 className='text-4xl text-title font-bold animate-moveLeft' id='title2'>My name is Humberto</h2>
              </div>
              <div className='text-2xl text-title text-center md:text-left'>
                <Typewriter
                  options={{
                    strings: ['I\'m Front End Developer', 'and tech enthusiast'],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 80,
                    cursor: '|',
                    wrapperClassName: 'Typewriter'
                  }}
                />
              </div>
              <div className='mt-4'>
                <Link to='contact'><Button text='Contact me' /></Link>
                <div className='flex justify-center lg:justify-start space-x-4 mt-8'>
                  <a href="https://github.com/hroblesdiez" target="_blank"><FaGithub className='text-3xl fill-[#000] opacity-75 transition-opacity duration-300 ease-in cursor-pointer hover:opacity-100'/></a>
                  <a href="https://www.linkedin.com/in/humberto-robles/" target="_blank"><FaLinkedin className='text-3xl fill-[#004182] opacity-75 transition-opacity duration-300 ease-in cursor-pointer hover:opacity-100'/></a>
                </div>
              </div>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
              <div className='w-96 min-h-96 md:w-full md:min-h-full'>
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAnimation