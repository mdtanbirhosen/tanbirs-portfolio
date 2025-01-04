import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const params = useParams()
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
                const filter = data.filter(item => item.id === params.id)
                console.log(filter)
                setProject(filter)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // console.log(projects);

    return (
        <div>
            {
                project && project.map(item => <div key={item.id} className='min-h-screen'>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <p></p>
                </div>)
            }
        </div>
    );
};

export default ProjectDetail;
