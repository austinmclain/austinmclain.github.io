import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './ProjectToggle.css'

export default function ProjectToggle(props) {
    const { projectType, setProjectType } = props

    const types = [
        { name: 'Personal Projects', type: 'personal' },
        { name: 'Course Projects', type: 'course' }
    ]

    return (
        <>
            <ButtonGroup id='project-toggle'>
                {types.map((type, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`filter-${idx}`}
                        type="radio"
                        variant="outline-warning"
                        name="radio"
                        value={type.type}
                        checked={projectType === type.type}
                        onChange={(e) => setProjectType(e.currentTarget.value)}
                    >
                        {type.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    )
}