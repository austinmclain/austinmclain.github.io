import './Project.css';

export default function Project(props) {
    const image = require(`../../images/${props.project.image}`)
    return (
        <div className="project">
            <img src={image} alt={props.project.project}></img>
            <h1 className='projName'>{props.project.name}</h1>
            <h3 className='stack'>{props.project.stack}</h3>
            <h3 className='description'>{props.project.description}</h3>
        </div>
    )
}