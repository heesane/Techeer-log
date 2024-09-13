import { useEffect, useState } from 'react';
import iconSearch from '../../../shared/assets/image/searchImg/Icon-Search.png';

export function DropdownSearch() {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  useEffect(() => {
    const searches = localStorage.getItem('recentSearches');

    if (searches) {
      setRecentSearches(JSON.parse(searches));
    }
  }, []);
  const handleSearchClick = (search: string) => {
    if (search === '') {
      window.location.replace('/project');
    } else {
      window.location.replace(`?search=${search}`);
    }
  };
  return (
    <div className="absolute top-[3rem] rounded-lg w-[14.8rem] flex border border-1 border-solid border-[#797979] border-opacity-90 bg-[#111111] bg-opacity-60 backdrop-blur-[24px]">
      <div className="flex flex-col w-[100%] p-[0.4rem_0.625rem] text-left bg-transparent">
        <p className="text-[#6a737b] text-[0.85rem] font-normal leading-7 mb-[0.2rem]">최근 검색어</p>
        {recentSearches.slice(0, 5).map((recent, index) => (
          <button
            key={index}
            onClick={() => {
              handleSearchClick(recent);
            }}
            className="flex flex-row mb-[0.4rem] h-[1.3rem] w-[100%]"
          >
            <img src={iconSearch} className="w-[0.938rem] h-[0.938rem] m-[0.2rem_0.625rem_0_0]" />
            <p className="text-left text-white">{recent}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
