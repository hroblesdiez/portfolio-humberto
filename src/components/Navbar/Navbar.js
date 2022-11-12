import Logo from './Logo'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import NavbarItems from './NavbarItems'
import { Link } from 'react-scroll'

const Navbar = () => {

  const[mobile, setMobile] = useState(false)

  const handleClick = () => {
    setMobile(!mobile)
  }

  return (
    <div className='px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between transition-shadow duration-500 ease-in-out  sticky bg-transparent top-0 left-0 right-0 z-30 w-full backdrop-blur-xl '>

    {/* logo */}
        <Link className='z-10 cursor-pointer' to='home' smooth={true.toString()}>
          <Logo />
        </Link>

    {/* menu */}
        <NavbarItems classNameUl='hidden md:flex' classNameLi='text-base hover:text-primary' />

    {/* hamburguer */}
        <div className='md:hidden z-10 cursor-pointer text-xl' onClick={handleClick}>
          {mobile ? <FaTimes  /> : <FaBars />}
        </div>

    {/* Mobile menu */}
        <NavbarItems
          classNameUl={
            `${mobile ? "translate-x-[0%]" : "-translate-x-[120%]"} transition ease-out inset-0  duration-300 fixed w-full h-screen flex flex-col justify-center items-center space-y-10 bg-bg text-title`}
          classNameLi='py-6 text-4xl hover:text-primary'
          onClick={handleClick}
        />
    </div>
  )
}

export default Navbar