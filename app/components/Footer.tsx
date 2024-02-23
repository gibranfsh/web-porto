import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8 mt-8 relative">
      <div className="w-full px-7 lg:px-32 z-10">
        <p className="text-3xl font-bold">Any questions or inquiries?</p>
        <p className="text-lg mb-4 text-slate-400">
          I'm open to collaborations within my expertise and new opportunities
          for career development. Feel free to reach out!
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <AiOutlineMail className="h-6 w-6 text-white mr-2" />
            <a href="mailto:gibran.fsh@gmail.com" className="text-lg">
              gibran.fsh@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <AiOutlineWhatsApp className="h-6 w-6 text-white mr-2" />
            <a href="tel:+6281311229890" className="text-lg">
              +6281311229890
            </a>
          </div>
        </div>

        <hr className="my-8" />

        <p className="text-lg text-center text-slate-400">
          © 2024 Gibran Fasha Ghazanfar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
