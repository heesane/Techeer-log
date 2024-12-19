import { useParams } from 'react-router-dom';
import { Project } from './Project/ui/Project.tsx';
import NavBar from '../shared/ui/NavBar.tsx';
import Footer from '../shared/ui/Footer.tsx';
import NotFound from '../shared/ui/NotFound.tsx';

export const ProjectDetailPage = () => {
  const { param } = useParams<string>();
  if (!param) {
    console.log('Project ID not found');
    return <NotFound />;
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
