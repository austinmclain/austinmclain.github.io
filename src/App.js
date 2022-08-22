import React, { useState } from 'react';
import Header from './components/header/Header';
import ProjectList from './components/projectList/ProjectList';

export default function App() {
  document.title = 'Austin McLain'
  const [projectType, setProjectType] = useState('personal');
  return (
    <div className="App">
      <Header projectType={projectType} setProjectType={setProjectType} />
      <ProjectList projectType={projectType} />
    </div>
  );
}