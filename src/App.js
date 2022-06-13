import Header from './components/header/Header';
import ProjectList from './components/projectList/ProjectList';

export default function App() {
  document.title = 'Austin McLain'
  return (
    <div className="App">
      <Header />
      <ProjectList />
    </div>
  );
}