import { useQuery } from '@tanstack/react-query';
import { getProject, ProjectView } from '../../../entities/projectView';
import { ProjectData } from '../../../shared/types/project.ts';
import NotFound from '../../../shared/ui/NotFound.tsx';

export const Project = ({ projectId }: { projectId: number }) => {
  const { data, isError, isLoading } = useQuery<ProjectData>({
    queryKey: ['projectData'],
    queryFn: () => getProject(projectId),
  });

  if (isLoading) {
    return <div className="bg-[#111111]"></div>;
  }

  if (isError) {
    return <NotFound />;
  }

  if (data) {
    return (
      <div className="pb-[10rem] bg-[#111111]">
        <ProjectView data={data} />
      </div>
    );
  }
};
