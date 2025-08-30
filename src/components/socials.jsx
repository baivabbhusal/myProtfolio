import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
const SocialIcon = () => {
  return (
    <div className="flex space-x-4 text-2xl">
      <a href="https://www.facebook.com/baivab.bhusal" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-blue-600 transition" size={40}/>
      </a>
      <a href="https://www.linkedin.com/in/baivab-bhusal-22ba02257/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-500 transition" size={40}/>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition" size={40}/>
      </a>
      <a href="https://github.com/baivabbhusal" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-700 transition" size={40}/>
      </a>
    </div>
  )
}

export default SocialIcon