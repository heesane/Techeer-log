import { Project } from '../../../shared/types/projectList.ts';
import axiosInstance from '../../../shared/api/axiosInstance.ts';

export const getProjectList = async ({
  pageStart,
  size,
  keyword,
}: {
  pageStart: number | unknown;
  size: number;
  keyword: string;
}): Promise<Project[]> => {
  const params = {
    pageStart: pageStart,
    pageSize: size,
    searchKeyword: keyword,
    searchFieldEnum: 'TITLE',
    sortDirection: 'DESC',
  };

  const response = await axiosInstance.get(`/api/v1/projects/list`, {
    params,
  });

  return response.data.data.projectItemResponseList;
};
