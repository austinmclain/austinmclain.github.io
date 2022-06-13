import data from './projects.json';
import Project from './Project';

export default function ProjectList() {
    return (
        <div>
            {data.map(project => {
                return (
                    <div key={project.id}>
                        <Project project={project} />
                    </div>
                )
            })}
        </div>
    )
}