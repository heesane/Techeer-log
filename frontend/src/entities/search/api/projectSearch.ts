import axiosInstance from '../../../shared/api/axiosInstance.ts';

export const projectSearch = async (keyword: string) => {
  const response = await axiosInstance.get('/api/v1/projects/list', {
    params: {
      pageStart: 0,
      pageSize: 20,
      searchKeyword: keyword,
      searchFieldEnum: 'TITLE',
      sortDirection: 'DESC',
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.data.projectItemResponseList;
};
