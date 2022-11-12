
const Button = ({text, link, type}) => {
  return (
    <button href={link} type={type} className='shadow-md py-2 px-4 bg-primary text-white font-semibold border border-primary transition-all duration-300 rounded text-lg hover:bg-transparent hover:text-title hover:border hover:border-primary'>{text}</button>
  )
}

export default Button