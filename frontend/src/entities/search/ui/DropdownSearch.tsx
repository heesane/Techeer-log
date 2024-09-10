import { useEffect, useState } from 'react';
import iconSearch from '../../../shared/assets/image/searchImg/Icon-Search.png';
import { useNavigate } from 'react-router-dom';

export function DropdownSearch() {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const searches = localStorage.getItem('recentSearches');

    if (searches) {
      setRecentSearches(JSON.parse(searches));
    }
  }, []);
  const handleSearchClick = (search: string) => {
    if (search === '') {
      navigate('/project');
    } else {
      navigate(`?search=${search}`);
    }
  };
  return (
    <div className="absolute top-[3rem] rounded-[1rem] w-[17rem] flex border border-1 border-solid border-white border-opacity-90 bg-[#111111] bg-opacity-60 backdrop-blur-[24px]">
      <div className="flex flex-col w-[100%] p-[0.625rem] text-left bg-transparent">
        <p className="text-[#6a737b] text-[0.85rem] font-normal leading-7">최근 검색어</p>
        {recentSearches.slice(0, 5).map((recent, index) => (
          <button
            key={index}
            onClick={() => {
              handleSearchClick(recent);
            }}
            className="flex flex-row mb-[0.4rem] h-[1.3rem] w-[100%]"
          >
            <img src={iconSearch} className="w-[0.938rem] h-[0.938rem] m-[0.25rem_0.625rem_0_0]" />
            <p className="text-left text-white">{recent}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
