// import React from 'react';
import '@testing-library/jest-dom';
import { useGetProjectQuery } from '../query/useGetProjectQuery';

jest.mock('../query/useGetProjectQuery', () => ({
  useGetProjectQuery: jest.fn(),
}));
const mockUseGetProjectQuery = useGetProjectQuery as jest.Mock;

describe('useProject 테스트', () => {
  const mockProjects = [
    { id: 1, projectTypeEnum: 'TEAM_PROJECT', year: 2023, semesterEnum: 'FIRST' },
    { id: 2, projectTypeEnum: 'PERSONAL_PROJECT', year: 2023, semesterEnum: 'SECOND' },
    { id: 3, projectTypeEnum: 'BOOTCAMP', year: 2022, semesterEnum: 'FIRST' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseGetProjectQuery.mockReturnValue({
      data: { pages: [mockProjects] },
      hasNextPage: false,
      isFetching: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
    });
  });

  test('필터 미적용시 모든 프로젝트 목록 반환', () => {});
});
