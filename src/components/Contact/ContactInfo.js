

const ContactInfo = ({icon, title, text}) => {
  return (
    <div className='flex items-center justify-center gap-4 space-y-2'>
        {icon}
        <div className='class="flex flex-col items-start justify-center"'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <p className='break-all'>{text}</p>
        </div>
    </div>
  )
}

export default ContactInfo