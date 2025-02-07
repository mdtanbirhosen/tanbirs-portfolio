import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';

const ProjectDetail = () => {
    const params = useParams();
    const [project, setProject] = useState('');

    useEffect(() => {
        fetch('/projectsData.json') // Ensure the file is in the public folder
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                const filter = data.filter(item => item.id === params.id);
                setProject(filter[0]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [params.id]);

    const { name, img, description, liveLink, keyFeatures, challenges, technologiesUsed, potentialImprovements } = project;

    return (
        <div className='min-h-screen px-2 max-w-screen-2xl mx-auto pb-10'>
            <Title title={`Details of ${name}`} />

            <div className='grid md:grid-cols-2 gap-6 mt-6'>
                {/* Image Section with Darkness Overlay */}
                <div className='relative w-full'>
                    <img
                        src={img}
                        className='object-cover h-full w-full rounded-2xl'
                        alt={name}
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-50 rounded-2xl'></div>
                </div>

                {/* Details Section */}
                <div className='flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold mb-4'>{name}</h2>
                    <p className='text-gray-400 mb-6'>{description}</p>
                    {keyFeatures && (
                        <div className='mb-6'>
                            <h3 className='text-xl font-semibold mb-2'>Key Features:</h3>
                            <ul className='list-disc list-inside space-y-2'>
                                {keyFeatures.map((feature, index) => (
                                    <li key={index} className='text-gray-400'>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {challenges && (
                        <div className='mb-6'>
                            <h3 className='text-xl font-semibold mb-2'>Challenges:</h3>
                            <ul className='list-disc list-inside space-y-2'>
                                {challenges.map((challenge, index) => (
                                    <li key={index} className='text-gray-400'>
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {technologiesUsed && (
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>Technologies Used:</h3>
                            <ul className='list-disc list-inside space-y-2'>
                                {technologiesUsed.map((tech, index) => (
                                    <li key={index} className='text-gray-400'>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {potentialImprovements && (
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>Potential improvements & future plans:</h3>
                            <ul className='list-disc list-inside space-y-2'>
                                {potentialImprovements.map((tech, index) => (
                                    <li key={index} className='text-gray-400'>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {liveLink && (
                        <a
                            href={liveLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-4 flex  justify-center md:justify-start'

                            >
                                <Button text='View Live Project'></Button>
                            
                        </a>
                    )}
                </div>
            </div>
            <div className='mt-5 flex flex-col md:flex-row  items-center justify-center pt-3 gap-3'>
            <Link to={'/'}><Button text={`⬅ Back to Home`}/></Link>
            {/* TODO: under construction */}
            <Link to={'/'}><Button text={`View All Projects`}/></Link>
            </div>
        </div>
    );
};

export default ProjectDetail;
