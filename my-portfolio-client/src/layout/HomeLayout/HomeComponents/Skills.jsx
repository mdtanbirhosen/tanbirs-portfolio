import Title from "../../../components/Title";
import Marquee from "react-marquee-slider";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiNodedotjs } from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "bg-red-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "bg-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "bg-yellow-400" },
    { name: "React", icon: <FaReact />, color: "bg-cyan-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-teal-500" },
    { name: "Firebase", icon: <SiFirebase />, color: "bg-orange-500" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "bg-green-600" },
    { name: "Git", icon: <FaGit />, color: "bg-gray-700" },
];

// const SkillCard = ({ skill, index }) => {
//     return (
        
//     );
// };

const Skills = () => {
    return (
        <div id="skills" className="py-10 bg-slate-900 text-white">
            {/* Title Component */}
            <Title title="My Skills" subtitle="Showcasing my technical expertise"></Title>

            {/* Horizontal Scrolling Marquee */}
            <div className="mt-6  flex items-center">
                <Marquee velocity={30} minScale={0.7} resetAfterTries={100}>
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-center mx-4 my-7">
                            <motion.div
                                className={`w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex flex-col items-center justify-center rounded-lg shadow-lg text-white font-semibold ${skill.color}`}
                                initial={{ y: index % 2 === 0 ? -10 : 10, opacity: 0.8 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            >
                                <div className="text-3xl">{skill.icon}</div>
                                <p className="mt-1 text-xs">{skill.name}</p>
                            </motion.div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;