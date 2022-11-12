
const ContactFormInput = ({labelFor, label, element, type, name, placeholder, rows, required}) => {

  return (
    <div className="px-4 py-2 mb-6 appearance-none bg-[#F7F7F7] rounded-md">
      <label htmlFor={labelFor} className="block mb-2 text-sm font-bold text-start">{label}</label>
      {element === 'input' && (
        <input type={type} name={name} placeholder={placeholder} className="block w-full m-0 text-base font-normal bg-transparent border-none rounded-lg outline-none appearance-none" required={required} />
      )}
      {element === 'textarea' && (
        <textarea name={name} placeholder={placeholder} rows={rows} className="block w-full m-0 text-base font-normal bg-transparent border-none rounded-lg outline-none appearance-none" required={required} />
      )}
    </div>
  )
}

export default ContactFormInput