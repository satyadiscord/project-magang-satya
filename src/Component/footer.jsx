import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-bold mb-2 tracking-widest">Kingsweb</h1>
        <div className="flex justify-center space-x-6">
          <a
            href="https://instagram.com/satya375__"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/satya.wiguna.395"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://wa.me/+628970161805"
            className="text-gray-400 hover:text-white"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://youtu.be/wEHXDDqU538?si=da5i9v8H3rJhdqnE"
            className="text-gray-400 hover:text-white"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
