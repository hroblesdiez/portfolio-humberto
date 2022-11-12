import { useEffect } from "react"

const ContactSuccess = () => {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('contact-success').classList.add('hidden');
    }, 3000)
  }, [])

  return (
    <div className="bg-[#59fb97] mt-4 w-full rounded-sm px-4 py-2 font-semibold" id="contact-success">
      <span>Thank you for your message. I will contact to you as soon as possible.</span>
    </div>
  )
}

export default ContactSuccess