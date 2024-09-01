import NavBar from '../../shared/ui/NavBar.tsx';
import Footer from '../../shared/ui/Footer.tsx';
import { DropDown } from '../../entities/filter';
import { ProjectList } from '../../entities/projectList';
import { useState } from 'react';
import { ProjectTabs } from '../../entities/ProjectTabs/ui/ProjectTabs.tsx';

export const ProjectPage = () => {
  const [selectedType, setSelectedType] = useState<string>('부트캠프');
  const [selectedYear, setSelectedYear] = useState<string>('진행 연도');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('전체');

  return (
    <div className="w-screen bg-[#111111] flex flex-col justify-center items-center">
      <NavBar />
      <div className="flex flex-col items-center justify-center py-[4.5rem] font-['Pretendard-Bold'] text-[3rem] text-white"></div>
      <div className="flex flex-col box-sizing-border items-start justify-center gap-[3.5rem] w-[1200px] px-4 mt-8 my-6 font-['Pretendard]">
        <ProjectTabs selectedType={selectedType} setSelectedType={setSelectedType} setSelectedYear={setSelectedYear} />
        <div className="flex flex-col items-start justify-center text-[1.2rem] px-[0.5rem] mb-[2rem] font-[500] text-[#cccccc]">
          8주 동안 프로젝트의 기획부터 배포까지 진행하는 테커의 부트캠프 프로젝트를 소개합니다.
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
