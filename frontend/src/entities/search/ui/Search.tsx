import { useEffect, useRef, useState } from 'react';
import * as api from '../index';
import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import cancelSearch from '../../../shared/assets/image/searchImg/Cancel-Search.svg';
import iconSearch from '../../../shared/assets/image/searchImg/Icon-Search.png';

export function Search({ setResult }: any) {
  const [searchresult, setSearchresult] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [placeholder, setPlaceholder] = useState<string>('검색할 프로젝트를 입력해 주세요.');
  const onSubmitSearch = (e: any) => {
    if (e.key === 'Enter' || e.key === 'Click' || e.type === 'click') {
      if (searchresult === '') {
        window.location.replace('/project');
      } else {
        window.location.replace(`?search=${searchresult}`);
      }
    }
  };
  useEffect(() => {
    if (searchQuery) {
      setSearchresult(searchQuery);
    }
    searchMutation.mutate();
  }, [searchQuery]);

  const onChangeSearch = (e: any) => {
    setSearchresult(e.target.value);
  };
  const onFocus = () => {
    setIsFocused(true);
    setPlaceholder('');
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setIsFocused(false);
      setPlaceholder('검색할 프로젝트를 입력해 주세요.');
    }, 200);
  };
  const searchMutation = useMutation({
    mutationFn: async () => {
      const response = await api.projectSearch(searchQuery);
      return response;
    },
    onSuccess: (data) => {
      setResult(data);
      if (searchQuery !== '') {
        const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
        const updatedSearches = [searchQuery, ...recentSearches.filter((item: string) => item !== searchQuery)];
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      }
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  return (
    <>
      <div className="rounded-[1rem] w-[17rem] h-[2.7rem] flex justify-center items-center border border-1 border-solid border-white border-opacity-90 bg-[#111111] bg-opacity-60 backdrop-blur-[24px] absolute top-0 right-0">
        <img
          onClick={() => searchMutation.mutate()}
          src={iconSearch}
          className="w-[0.938rem] h-[0.938rem] m-[0_0.625rem_0_0.625rem] cursor-pointer flex "
        />
        <input
          autoComplete="off"
          ref={inputRef}
          value={searchresult}
          onKeyDown={onSubmitSearch}
          onChange={onChangeSearch}
          type="text"
          name="search"
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={handleBlurContainer}
          className="w-[87%] h-[30px] bg-transparent font-['Pretendard-Light'] text-[0.92rem] text-[#FFFFFF] placeholder-font-['Pretendard-Light'] focus:outline-none"
        />
        {isFocused && <api.DropdownSearch />}
        {searchresult.length > 0 && (
          <img
            onClick={() => {
              setSearchresult('');
              window.location.replace('/project');
            }}
            src={cancelSearch}
            className="w-[1.2rem] h-[1.2rem] m-[0_0.625rem_0_0] cursor-pointer"
          />
        )}
      </div>
    </>
  );
}
