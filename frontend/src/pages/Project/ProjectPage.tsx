import NavBar from '../../shared/ui/NavBar.tsx';
import Footer from '../../shared/ui/Footer.tsx';
import { DropDown } from '../../entities/filter';
import { ProjectList } from '../../entities/projectList';
import { useState } from 'react';
import { Tabs } from '../../entities/ProjectTabs/ui/Tabs.tsx';

export const ProjectPage = () => {
  const [selectedType, setSelectedType] = useState<string>('부트캠프');
  const [selectedYear, setSelectedYear] = useState<string>('진행 연도');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('전체');

  return (
    <div className="w-screen bg-[#111111] flex flex-col justify-center items-center">
      <NavBar />
      <div className="flex flex-col items-center justify-center py-[10rem] font-['Pretendard-Bold'] text-[3rem] text-white">
        TECHEER에서 진행한 프로젝트를 구경해보세요!
      </div>
      <div className="flex flex-col box-sizing-border items-center justify-center gap-16 w-[1200px] px-4 my-8">
        <div className="flex w-[750px] h-fit bg-[#27272a] p-[0.25rem] rounded-lg">
          <Tabs setSelectedType={setSelectedType} />
        </div>
        <DropDown
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
      </div>

      <div className="flex flex-col items-end w-[1200px]">
        <ProjectList selectedType={selectedType} selectedYear={selectedYear} selectedPeriod={selectedPeriod} />
      </div>

      <Footer />
    </div>
  );
};
