import  { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Title from '../../../components/Title';
import Button from '../../../components/Button';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('./projectsData.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    return (
        <div id='my-projects'>
            <Title title='My Projects'></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                    {/* Image */}
                    <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-64 object-cover"
                    />
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                    ></div>
                    {/* Text */}
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-500 h-full"
                    >
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                        <div className='pt-9 flex gap-5'>
                            <a href={project.liveLink} target='_blank'><Button text='Live Preview'/></a>
                            <NavLink to={`/projectDetail/${project.id}`}><Button text='See Details'></Button></NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Projects;