import Logo from "../Navbar/Logo"
import { GiSwordman } from 'react-icons/gi'
import SectionTitle from "../General/SectionTitle"


const About = () => {
  return (
    <div className='w-full' name='about'>
      <div className="px-4 md:px-20 lg:px-36 md:mt-0 mb-8 md:mb-12 lg:mb-20">
       <SectionTitle icon={<GiSwordman size="28" />} text='About Me' />
        <div className='flex flex-col justify-between items-center md:flex-row md:justify-between md:items-center'>
          <div className='w-full h-full md:w-[35%] mb-8 md:mb-0 md:pr-8'>
            <Logo classname="w-[150px] h-[150px] mx-auto" />
          </div>
          <div className='w-full h-full md:w-[65%] '>
            <h3 className='text-center text-lg md:text-2xl md:text-left text-title font-semibold mb-4'>I am a junior self-taught Front End Developer who is passionate about his work.</h3>
            <p className='text-center text-base md:text-left text-paragraph'>I enjoy creating web pages and user interfaces.
            I interact well with other people, I am continuosly looking for solutions to problems,learning new technologies and willing to keep improving.
            My next goal is learn Redux and Node.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About