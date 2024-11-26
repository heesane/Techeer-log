// import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useGetProjectQuery } from '../query/useGetProjectQuery';
import { ProjectList } from './projectList.tsx';

jest.mock('../query/useGetProjectQuery');

describe('ProjectList', () => {
  const mockProjects = [
    { id: 1, projectTypeEnum: 'TEAM_PROJECT', year: 2023, semesterEnum: 'FIRST' },
    { id: 2, projectTypeEnum: 'PERSONAL_PROJECT', year: 2023, semesterEnum: 'SECOND' },
    { id: 3, projectTypeEnum: 'BOOTCAMP', year: 2022, semesterEnum: 'FIRST' },
  ];

  beforeEach(() => {
    // useGetProjectQuery 모킹 설정
    (useGetProjectQuery as jest.Mock).mockReturnValue({
      data: { pages: [mockProjects] },
      hasNextPage: false,
      isFetching: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
    });
  });

  test('선택한 옵션에 따라 프로젝트가 필터링되어 표시되는지 테스트', () => {
    render(
      <ProjectList
        selectedType="부트캠프"
        selectedYear="2022"
        selectedPeriod="동계"
        alignment="left"
        result="testResult"
      />,
    );

    // 필터링 후 나타나는 프로젝트가 맞는지 확인
    const filteredProject = screen.getByText(/부트캠프/i);
    expect(filteredProject).toBeInTheDocument();
    expect(screen.queryByText(/팀 프로젝트/i)).not.toBeInTheDocument();
  });

  test('선택된 연도 필터가 적용되어 2023년도 프로젝트만 표시되는지 테스트', () => {
    render(
      <ProjectList
        selectedType="팀 프로젝트"
        selectedYear="2023"
        selectedPeriod="전체"
        alignment="left"
        result="testResult"
      />,
    );

    // 2023년 프로젝트가 필터링 되어 나타나는지 확인
    const filteredProjects = screen.getAllByText(/2023/i);
    expect(filteredProjects.length).toBe(2);
    expect(screen.queryByText(/2022/i)).not.toBeInTheDocument();
  });
});
