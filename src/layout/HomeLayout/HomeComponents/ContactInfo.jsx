
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className=" py-10  text-white max-w-screen-md mx-auto p-2 md:p-4 lg:p-6 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-4">
                {/* Phone Number */}
                <div className="flex items-center space-x-3">
                    <FaPhoneAlt className="text-2xl text-green-500" />
                    <span className="text-sm md:text-base">01888156886</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-2xl text-blue-500" />
                    <span className="text-sm md:text-base">mdtanbirhosen912@gmail.com</span>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-3">
                    <a
                        href="https://www.linkedin.com/in/md-tanbir-hosen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3"
                    >
                        <FaLinkedin className="text-2xl text-blue-700" />
                        <span className="text-sm md:text-base text-gray-400 link-hover">Linkedin</span>
                    </a>
                </div>

                {/* Facebook */}
                <div className="flex items-center space-x-3">
                    <a
                        href="https://www.facebook.com/danger.ahaed.sstanbir.001/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3"
                    >
                        <FaFacebook className="text-2xl text-pink-500" />
                        <span className="text-sm md:text-base text-gray-400 link-hover">Facebook</span>
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-3">
                    
                        <FaWhatsapp className="text-2xl text-pink-500" />
                        <span className="text-sm md:text-base text-gray-400">+8801888156886</span>
                    
                </div>

            </div>
        </div>
    );
};

export default ContactInfo;
