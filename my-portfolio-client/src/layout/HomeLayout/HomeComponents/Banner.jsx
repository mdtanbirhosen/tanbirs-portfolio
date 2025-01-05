import Typewriter from 'typewriter-effect';
import bannerImg from '../../../assets/tanbir-min (1).png';
import Button from '../../../components/Button';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="flex md:flex-row flex-col-reverse items-center px-2">
            {/* Info section */}
            <div className="w-full md:w-1/2">
                <h5 className='mb-4'>
                    <span>I am,</span> <br />
                    <span className="text-primary-color">
                        <span className="font-medium text-3xl md:text-5xl  lg:text-6xl">Md.Tanbir</span> Hossen
                    </span>
                </h5>
                <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4">
                    <Typewriter
                        options={{
                            strings: ["Jr. Web Developer", "Frontend Developer",],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </h2>
                {/* social media links */}
                <div className='flex flex-wrap gap-4 py-5'>
                    <a
                        href="https://www.facebook.com/danger.ahaed.sstanbir.001/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-color"
                    >
                        <FaFacebook className="text-4xl " />
                    </a>
                    <a
                        href="https://github.com/mdtanbirhosen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-color"
                    >
                        <FaGithub className="text-4xl " />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-tanbir-hosen-669056251/"
                        className="hover:text-primary-color"
                        title="LinkedIn coming soon!"
                    >
                        <FaLinkedin className="text-4xl  opacity-50 cursor-not-allowed" />
                    </a>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <a href="#contact-me">
                        <Button text='Hire Me'></Button>
                    </a>
                    <a href="/resume.pdf" download="Md_Tanbir_Hossen_Resume.pdf">
                        <Button text='Download Resume'></Button>
                    </a>
                </div>
            </div>
            {/* Image section */}
            <div className="w-full md:w-1/2 flex justify-center mb-4 relative">
                <div className='md:h-[100px] md:w-[100px] h-[70px] w-[70px] bg-primary-color absolute left-0 rounded-br-full '></div>
                <div className='md:h-[100px] md:w-[100px] h-[70px] w-[70px] bg-primary-color absolute right-0 bottom-0 rounded-tl-full '></div>
                <img className="  lg:h-[700px] " src={bannerImg} alt="Tanbir Hossen" />
            </div>
        </div>
    );
};

export default Banner;
