import Title from "../../../components/Title";
import tanbirImg from "../../../assets/tanbir.png"
const AboutMe = () => {
    return (
        <div id="about-me" className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-3 md:p-5 lg:p-10 rounded-lg shadow-lg">
            <Title
                title="About Me"
                subtitle="Here is some info about me. I think you’ll like it."
            ></Title>

            {/* Personal Details */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4 text-gray-300">
                    <h3 className="flex items-center text-lg">
                        <span className="font-bold">Name: </span>
                        <span className="text-primary-color ml-2">Md Tanbir Hossen</span>
                    </h3>
                    <p className="flex items-center text-lg">
                        <span className="font-bold">Role: </span>
                        <span className="text-primary-color ml-2">Front-End Developer</span>
                    </p>
                    <p className="flex items-center text-lg">
                        <span className="font-bold">Hobby: </span>
                        <span className="text-primary-color ml-2">
                            Learning Ethical Hacking, Exploring more technology, etc.
                        </span>
                    </p>
                    <p className="flex items-center text-lg">
                        <span className="font-bold">Passion: </span>
                        <span className="text-primary-color ml-2">
                            Building intuitive, user-friendly websites and applications.
                        </span>
                    </p>
                </div>

                {/* Profile Card */}
                <div className="flex justify-center lg:justify-end">
                    <div className="card w-72 bg-gray-800 shadow-xl border-t-4 border-primary-color">
                        <div className="card-body items-center text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary-color ring-offset-gray-900 ring-offset-2">
                                    <img
                                        className="object-center"
                                        src={tanbirImg}
                                        alt="Profile"
                                    />
                                </div>
                            </div>
                            <h2 className="card-title mt-4 text-gray-200">Md Tanbir Hossen</h2>
                            <p className="text-gray-400">Front-End Developer</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="mt-10">
                <h3 className="font-bold text-2xl mb-5 text-primary-color border-b-2 border-primary-color pb-2">
                    Educational Qualification
                </h3>
                <div className="card bg-gray-800 shadow-lg p-6 border-l-4 border-primary-color">
                    <h3 className="text-xl font-semibold text-gray-200">
                        Diploma in Engineering
                    </h3>
                    <p className="text-xs md:text-lg mt-2 text-gray-300">
                        <span className="font-bold">Major:</span>{" "}
                        Computer Science and Technology
                    </p>
                    <p className="text-xs md:text-lg mt-2 text-gray-300">
                        <span className="font-bold">Institution:</span>{" "}
                        SHYAMOLI IDEAL POLYTECHNIC INSTITUTE.
                    </p>
                    <p className="text-xs md:text-lg mt-2 text-gray-300">
                        <span className="font-bold">City:</span> Mohammadpur, Dhaka
                    </p>
                    <p className="text-xs md:text-lg mt-2 text-gray-300">
                        <span className="font-bold">Current Semester:</span>{" "}
                        7th Semester
                    </p>
                    <p className="text-xs md:text-lg mt-2 text-gray-300">
                        <span className="font-bold">Expected Graduation:</span>{" "}
                        December 2025
                    </p>
                    <p className="mt-4 text-gray-500">
                        Coursework includes Programming Fundamentals, Data
                        Structures, Web Development, and Database Management
                        Systems.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
