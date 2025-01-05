import footerLogo from '../../../assets/footer_logo.png';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
                {/* Logo and Description */}
                <div className="mb-5 md:mb-0 flex flex-col items-center md:items-start">
                    <img className="h-[100px] mb-3" src={footerLogo} alt="Logo" />
                    <p className="text-center md:text-left text-sm text-gray-400">
                        Crafted with passion by Md Tanbir Hossen.<br />
                        Junior Web Developer.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="mb-5 md:mb-0">
                    <ul className="flex flex-col md:flex-row gap-4 text-gray-400 text-sm">
                        <li><a href="#about-me" className="hover:text-primary-color">About Me</a></li>
                        <li><a href="#my-skills" className="hover:text-primary-color">My Skills</a></li>
                        <li><a href="#my-projects" className="hover:text-primary-color">Projects</a></li>
                        <li><a href="#contact-me" className="hover:text-primary-color">Contact Me</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-6 text-gray-400">
                    <a
                        href="https://www.facebook.com/danger.ahaed.sstanbir.001/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-color"
                    >
                        <FaFacebook className="text-xl" />
                    </a>
                    <a
                        href="https://github.com/mdtanbirhosen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-color"
                    >
                        <FaGithub className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-tanbir-hosen-669056251/"
                        className="hover:text-primary-color"
                        title="LinkedIn coming soon!"
                    >
                        <FaLinkedin className="text-xl opacity-50 cursor-not-allowed" />
                    </a>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Md Tanbir Hossen. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
