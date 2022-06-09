import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <h1>Hello! My name is <span className='name'>Austin McLain.</span></h1>
            <h3>I'm a computer science student with a passion for working with software and solving problems.
                This site is a visual collection of some of my projects. Welcome!
            </h3>
            <p><a href='https://github.com/austinmclain' target='_blank' rel='noopener noreferrer'>GitHub</a> | <a href='https://www.linkedin.com/in/austinmclain/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
            <br></br>
        </div>
    )
}