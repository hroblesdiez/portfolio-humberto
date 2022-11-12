import { MdEmail, MdPhone } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import NavbarItems from '../Navbar/NavbarItems';

const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <div className='w-screen bg-bg2 px-4 sm:px-8 py-4 text-white'>
      <div className='flex flex-col items-center justify-start lg:flex-row lg:justify-center lg:items-start lg:space-x-16'>
          <div className="">
            <div className='flex items-center space-x-4 mb-2'>
              <MdEmail size="22" /><span className='break-all'>humberto.robles.diez@gmail.com</span>
            </div>
            <div className='flex items-center space-x-4 mb-4'>
              <MdPhone /><FaTelegram /><IoLogoWhatsapp /><span>+48 690 620 188</span>
            </div>

          </div>
          <div className='mb-4'>
            <NavbarItems classNameUl='flex flex-wrap justify-center' classNameLi='mb-2 hover:text-primary' />
          </div>
      </div>
      <div>
        <p className="text-sm text-center">&copy; {date} Developed with &#x1F497; by <span className="font-bold">Humberto</span></p>
      </div>
    </div>
  )
}

export default Footer