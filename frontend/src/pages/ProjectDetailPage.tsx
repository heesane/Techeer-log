import { useParams } from 'react-router-dom';
import { Project } from './Project/ui/Project.tsx';
import NavBar from '../shared/ui/NavBar.tsx';
import Footer from '../shared/ui/Footer.tsx';

export const ProjectDetailPage = () => {
  const { param } = useParams<string>();
  if (!param) {
    console.log('Project ID not found');
    return <div>404 not found</div>;
  }

  const projectId = parseInt(param, 10);

  return (
    <>
      <NavBar />
      <Project projectId={projectId} />
      <Footer />
    </>
  );
};
