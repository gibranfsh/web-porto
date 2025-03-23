"use client";
import { 
  AiOutlineMail, 
  AiOutlineWhatsApp, 
  AiOutlineHeart 
} from "react-icons/ai";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram 
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 mt-24 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600"></div>
      
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToTop}
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'm open to collaborations within my expertise and new opportunities
              for career development. Feel free to reach out!
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="mailto:gibran.fsh@gmail.com" 
                className="flex items-center group"
              >
                <div className="bg-gray-800 p-3 rounded-full mr-4 group-hover:bg-red-600 transition-colors duration-300">
                  <AiOutlineMail className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white group-hover:text-red-400 transition-colors">gibran.fsh@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+6281311229890" 
                className="flex items-center group"
              >
                <div className="bg-gray-800 p-3 rounded-full mr-4 group-hover:bg-red-600 transition-colors duration-300">
                  <AiOutlineWhatsApp className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white group-hover:text-red-400 transition-colors">+62 813 1122 9890</p>
                </div>
              </a>
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors">About Me</a>
              <a href="#tech_stacks" className="text-gray-300 hover:text-red-400 transition-colors">Tech Stacks</a>
              <a href="#projects" className="text-gray-300 hover:text-red-400 transition-colors">Projects</a>
              <a href="#experiences" className="text-gray-300 hover:text-red-400 transition-colors">Experience</a>
              <a href="#awards" className="text-gray-300 hover:text-red-400 transition-colors">Awards</a>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/gibranfsh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-white text-lg" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gibran-fasha-ghazanfar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-white text-lg" />
                </a>
                <a 
                  href="https://www.instagram.com/gibranfg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              © {currentYear} Gibran Fasha Ghazanfar. All rights reserved.
            </motion.p>
            
            <motion.p 
              className="text-gray-400 text-sm flex items-center mt-2 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Made with <AiOutlineHeart className="text-red-500 mx-1" /> using Next.js & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
