

const SectionTitle = ({icon, text}) => {

  return (
    <div className="flex gap-4 items-center justify-center mb-8">
        {icon}
        <h2 className='text-4xl text-title font-bold text-center'>{text}</h2>
    </div>
  )
}

export default SectionTitle

