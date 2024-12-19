// import React from 'react';
import '@testing-library/jest-dom';
import { useGetProjectQuery } from '../query/useGetProjectQuery';
import { renderHook } from '@testing-library/react';
import { useProjects } from './projectList.tsx';

jest.mock('../query/useGetProjectQuery', () => ({
  useGetProjectQuery: jest.fn(),
}));
const mockUseGetProjectQuery = useGetProjectQuery as jest.Mock;

describe('useProject 테스트', () => {
  const mockProjects = [
    { id: 0, projectTypeEnum: 'TEAM_PROJECT', year: 2024, semesterEnum: 'ALL' },
    { id: 1, projectTypeEnum: 'TEAM_PROJECT', year: 2023, semesterEnum: 'ALL' },
    { id: 2, projectTypeEnum: 'PERSONAL_PROJECT', year: 2023, semesterEnum: 'ALL' },
    { id: 3, projectTypeEnum: 'BOOTCAMP', year: 2024, semesterEnum: 'FIRST' },
    { id: 4, projectTypeEnum: 'BOOTCAMP', year: 2024, semesterEnum: 'SECOND' },
    { id: 5, projectTypeEnum: 'BOOTCAMP', year: 2023, semesterEnum: 'SECOND' },
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

  test('부트캠프 선택 시, 부트캠프 프로젝트 반환', () => {
    const { result } = renderHook(() =>
      useProjects({
        selectedType: '부트캠프',
        selectedYear: '전체',
        selectedPeriod: '전체',
        result: '',
      }),
    );

    expect(result.current.projects).toEqual([mockProjects[3], mockProjects[4], mockProjects[5]]);
  });

  test('부트캠프-전체-하계 옵션 선택 시 필터링된 목록 반환', () => {
    const { result } = renderHook(() =>
      useProjects({
        selectedType: '부트캠프',
        selectedYear: '전체',
        selectedPeriod: '하계',
        result: '',
      }),
    );
    expect(result.current.projects).toEqual([mockProjects[4], mockProjects[5]]);
  });

  test('부트캠프-2024-하계 옵션 선택 시 필터링된 목록 반환', () => {
    const { result } = renderHook(() =>
      useProjects({
        selectedType: '부트캠프',
        selectedYear: '2024',
        selectedPeriod: '하계',
        result: '',
      }),
    );
    expect(result.current.projects).toEqual([mockProjects[4]]);
  });

  test('팀 프로젝트 선택 시, 팀/개인 프로젝트 반환', () => {
    const { result } = renderHook(() =>
      useProjects({
        selectedType: '팀 프로젝트',
        selectedYear: '전체',
        selectedPeriod: '전체',
        result: '',
      }),
    );
    expect(result.current.projects).toEqual([mockProjects[0], mockProjects[1], mockProjects[2]]);
  });

  test('팀프로젝트-2023 선택 시, 필터링된 목록 반환', () => {
    const { result } = renderHook(() =>
      useProjects({
        selectedType: '팀 프로젝트',
        selectedYear: '2023',
        selectedPeriod: '전체',
        result: '',
      }),
    );
    expect(result.current.projects).toEqual([mockProjects[1], mockProjects[2]]);
  });

  test('팀 프로젝트에 Period 설정 시 빈 목록 반환', () => {
    const { result } = renderHook(() =>
      useProjects({
        selectedType: '팀 프로젝트',
        selectedYear: '2024',
        selectedPeriod: '동계',
        result: '',
      }),
    );
    expect(result.current.projects).toEqual([]);
  });
});
