
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className=" py-10 bg-slate-800 text-white max-w-screen-md mx-auto p-6 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
                {/* Phone Number */}
                <div className="flex items-center space-x-3">
                    <FaPhoneAlt className="text-2xl text-green-500" />
                    <span className="text-lg">01888156886</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-2xl text-blue-500" />
                    <span className="text-lg">mdtanbirhosen912@gmail.com</span>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-3">
                    <FaLinkedin className="text-2xl text-blue-700" />
                    <span className="text-lg text-gray-400">Coming Soon</span>
                </div>

                {/* Instagram */}
                <div className="flex items-center space-x-3">
                    <FaInstagram className="text-2xl text-pink-500" />
                    <span className="text-lg text-gray-400">Coming Soon</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
