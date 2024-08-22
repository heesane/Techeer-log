import { getScrapList } from '../api/getScrapList.ts';
import { Scrap } from '../types/scrapList.ts';
import { useInfiniteQuery } from '@tanstack/react-query';

const SIZE_PER_PAGE = 20; //페이지당 불러올 게시글 개수

export const useGetScrapQuery = () => {
  const { data, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<Scrap[]>({
    queryKey: ['scrapList'],
    queryFn: ({ pageParam }) => getScrapList(),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;

      return lastPage.length < SIZE_PER_PAGE ? undefined : nextPage;
    },

    retry: 0,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage };
};
