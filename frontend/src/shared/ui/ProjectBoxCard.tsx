import { useState } from 'react';
import { Project } from '../types/projectList.ts';
import { Link, useParams } from 'react-router-dom';
import arrow from '../assets/image/mainImg/arrow.png';

interface propsProjects {
  project: Project;
}
export default function ProjectBoxCard({ project }: propsProjects) {
  const firstFrontend = project.frameworkResponseList.find((framework) => framework.frameworkTypeEnum === 'FRONTEND');
  const firstBackend = project.frameworkResponseList.find((framework) => framework.frameworkTypeEnum === 'BACKEND');
  const teamName = project.projectTeamNameEnum;

  const { param } = useParams();
  const moveProjectView = param === 'judge' ? `/2024-summer-bootcamp/project/${project.id}` : `/project/${project.id}`;

  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {param === 'judge' ? (
        <div className="w-[100%] font-['Pre-S'] bg-[#2e2e2e70] text-center rounded-[0.1rem] border-solid border-[0.1rem] border-[#444444] font-semibold text-[1.7rem] text-[#EEEEEE] p-[0.3rem] mt-[2rem] mb-[0.5rem]">
          {teamName}팀
        </div>
      ) : (
        <></>
      )}
      <div
        key={project.id}
        className="h-[24rem] rounded-[0.3rem] border-solid border border-[#444444] flex flex-col box-sizing-border w-[100%] relative transform transition-transform duration-300 ease-in-out"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {isHover ? (
          <div className="absolute z-10 w-full h-full px-[2rem] py-[2.5rem] text-white transition-opacity backdrop-blur-[0.9rem] duration-1000 ease-in-out bg-[#0b0b0bf5] rounded opacity-[0.99]">
            <div className="w-80 inline-block self-start break-words font-['Pre'] font-bold text-[1.6rem] text-[#fafafa] overflow-hidden text-ellipsis whitespace-nowrap">
              {project.title}
            </div>
            <div className="w-80 mt-[0.5rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[1.1rem] text-[#B2B2B2] overflow-hidden text-ellipsis whitespace-nowrap text-clamp">
              {project.year}
              {project.semesterEnum === 'FIRST'
                ? ' 동계 부트캠프'
                : project.semesterEnum === 'SECOND'
                  ? ' 하계 부트캠프'
                  : ''}
            </div>
            <div className="w-80 mt-[1.5rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[1.1rem] text-[#fafafa] overflow-hidden text-ellipsis whitespace-nowrap text-clamp">
              {project.subtitle}
            </div>
            <div className="rounded-[0.3rem] m-[1.5rem_0_0_0] flex flex-row flex-wrap self-start w-[90%] box-sizing-border gap-[0.5rem]">
              {firstFrontend ? (
                <div className="rounded-[0.3rem] bg-[#333333] flex flex-row justify-center items-center p-[0.5rem_1.5rem_0.5rem_1.5rem] box-sizing-border">
                  <span className="break-words font-['Pre-R'] font-semibold text-[0.9rem] text-[#FFFFFF]">
                    {firstFrontend.name}
                  </span>
                </div>
              ) : (
                <></>
              )}
              {firstBackend ? (
                <div className="rounded-[0.3rem] bg-[#333333] flex flex-row justify-center items-center p-[0.5rem_1.5rem_0.5rem_1.5rem] box-sizing-border">
                  <span className="break-words font-['Pre-R'] font-semibold text-[0.9rem] text-[#FFFFFF]">
                    {firstBackend.name}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="absolute bottom-[2rem] flex flex-row gap-[1.4rem] font-['Pre'] text-[1.5rem]">
              <Link to={moveProjectView}>
                <button className="flex flex-row gap-[0.3rem] cursor-pointer">
                  <p className="text-[#0047FF] font-bold">Detail </p>
                  <img className="h-[1.2rem] w-[1rem] ml-[0.1rem] mt-[0.2rem]" src={arrow}></img>
                </button>
              </Link>
              {project.githubLink ? (
                <Link to={project.githubLink}>
                  <button className="flex flex-row gap-[0.3rem] cursor-pointer">
                    <p className="text-[#0047FF] font-bold">Github </p>
                    <img className="h-[1.2rem] w-[1rem] ml-[0.1rem] mt-[0.2rem]" src={arrow}></img>
                  </button>
                </Link>
              ) : (
                <></>
              )}
              {project.blogLink ? (
                <Link to={project.blogLink}>
                  <button className="flex flex-row gap-[0.3rem] cursor-pointer">
                    <p className="text-[#0047FF] font-bold">Blog </p>
                    <img className="h-[1.2rem] w-[1rem] ml-[0.1rem] mt-[0.2rem]" src={arrow}></img>
                  </button>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-center items-center rounded-[0.3rem] w-[99.9%] h-[15rem]">
          {project.mainImageUrl ? (
            <img alt="mainImg" className="object-contain w-full h-full" src={project.mainImageUrl} />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col bg-[#111111] h-[9rem] py-[1.2rem] px-2">
          <div className="w-[85%] m-[0.3rem_0rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.5rem] bg-[#FFFFFF] text-[transparent] bg-clip-text overflow-hidden text-ellipsis whitespace-nowrap">
            {project.title}
          </div>
          <div className="w-[85%] m-[0.2rem_0rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[1.05rem] text-[#CCCCCC] overflow-hidden text-ellipsis whitespace-nowrap text-clamp">
            {project.subtitle}
          </div>
        </div>
      </div>
    </>
  );
}
