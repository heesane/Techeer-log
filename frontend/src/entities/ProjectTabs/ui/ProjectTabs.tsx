interface TabProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  setSelectedYear: (type: string) => void;
}
export const ProjectTabs = ({ selectedType, setSelectedType, setSelectedYear }: TabProps) => {
  const handleTabClick = (category: string) => {
    setSelectedYear('진행 연도');
    setSelectedType(category);
  };

  return (
    <div className="flex flex-row gap-[4rem] w-[100%] pb-[1rem] border-b-[0.1rem] border-solid border-[#444444] box-sizing-border">
      <span
        className={`break-words font-['Pre'] font-[600] text-[1.7rem] w-fit ml-1 text-center ${
          selectedType === '부트캠프' ? 'text-[#fafafa]' : 'text-[#a1a1a1]'
        } cursor-pointer`}
        onClick={() => handleTabClick('부트캠프')}
      >
        실리콘밸리 부트캠프
        {selectedType === '부트캠프' && (
          <div className="bg-[#0047FF] z-[2] absolute w-[14.5rem] h-[0.2rem] -ml-1 mt-[0.92rem]"></div>
        )}
      </span>
      <span
        className={`break-words font-['Pre'] font-[600] text-[1.7rem] ${
          selectedType === '팀 프로젝트' ? 'text-[#fafafa]' : 'text-[#a1a1a1]'
        } cursor-pointer`}
        onClick={() => handleTabClick('팀 프로젝트')}
      >
        TECHEER
        {selectedType === '팀 프로젝트' && (
          <div className="bg-[#0047FF] z-[2] absolute w-[8rem] -ml-[0.5rem] h-[0.2rem] mt-[0.92rem]"></div>
        )}
      </span>
    </div>
  );
};
