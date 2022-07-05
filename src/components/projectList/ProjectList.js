import data from './projects.json';
import Project from './Project';

export default function ProjectList() {
    return (
        <div id='projectList' className='container-md'>
            {data.map(project => {
                return (
                    <div key={project.id}>
                        <Project project={project} />
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
}