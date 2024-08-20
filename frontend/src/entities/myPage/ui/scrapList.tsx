// import { useState } from 'react';
// import ScrapCard from './scrapCard';

// export const ScrapList = () => {
//   const [scrapList, setScrapList] = useState<any[]>([]);
//   return (
//     <div className="grid grid-rows-3 grid-cols-3 gap-4 m-4">
//       {scrapList.length > 0 ? (
//         scrapList.map((scrap) => <ScrapCard key={scrap.projectId} scrap={scrap} />)
//       ) : (
//         <div className="bg-transparent w-full h-full">Loading...</div>
//       )}
//     </div>
//   );
// };

// /entities/mypage/ScrapListContainer.tsx
import { useQuery } from '@tanstack/react-query';
import { getScrapList } from '../api/getScrapList';
import ScrapCard from './scrapCard';
import { Scrap } from '../types/scrapList';

export default function ScrapList() {
  // useQuery를 사용하여 스크랩 데이터를 가져옵니다.
  const { data, error, isLoading } = useQuery<Scrap[]>({
    queryKey: ['scrapList'],
    queryFn: getScrapList,
  });

  if (isLoading) {
    return <div className="bg-transparent w-full h-full">Loading...</div>;
  }

  if (error) {
    return <div>Error loading scrap list</div>;
  }

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-4 m-4">
      {data && data.length > 0 ? (
        data?.map((scrap) => <ScrapCard key={scrap.projectId} scrap={scrap} />)
      ) : (
        <div>No projects found.</div>
      )}
    </div>
  );
}
