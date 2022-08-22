import data from './projects.json';
import Project from './Project';

export default function ProjectList(props) {
    const { projectType } = props
    return (
        <div id='projectList' className='container-md'>
            {data.filter(project => project.type === projectType).map(project => {
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