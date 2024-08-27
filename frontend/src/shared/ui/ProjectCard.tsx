import { useState } from 'react';
import { Project } from '../types/projectList.ts';
import { Link, useParams } from 'react-router-dom';
import { MarkdownView } from '../../feature/ProjectWrite/index.ts';
interface propsProjects {
  project: Project;
}
export default function ProjectCard({ project }: propsProjects) {
  const firstFrontend = project.frameworkResponseList.find((framework) => framework.frameworkTypeEnum === 'FRONTEND');
  const firstBackend = project.frameworkResponseList.find((framework) => framework.frameworkTypeEnum === 'BACKEND');
  const teamName = project.projectTeamNameEnum;
  const word = `### \uD83C\uDF33 모여봐요 동물의 숲 \uD83C\uDF33\n\n동물의 숲 캐릭터\uD83D\uDC3B와 함께하는 실제 전문가에 기반한 AI 멘토링 서비스\n\n\n### \uD83D\uDCCD 서비스 소개\uD83D\uDCCD \n\n현대 사회에서 청년층이 겪는 다양한 고민과 스트레스는 갈수록 증가하고 있습니다.\n\n그러나 이러한 문제를 해결하기 위한 멘토를 찾기란 쉽지 않습니다.\n\n**말해봐요 고민의 숲** 은 특정 분야 전문가들을 기반으로 만들어진 AI 멘토와 상담할 수 있는 기회를 제공합니다. \n\n동물의 숲 테마를 적용한 친근한 동물 멘토들을 통해 편안하고 따뜻한 분위기에서 고민을 나눌 수 있습니다.\n\n여러분의 이야기를 귀 기울여 듣고, 적절한 조언을 제공하는 **말해봐요 고민의 숲** 에서 마음의 짐을 덜어보세요. \n 제공합니다. \n 제공을 해요.
  `;

  const { param } = useParams();
  const moveProjectView =
    param === 'judge' ? `/2024-summer-bootcamp/project/${project.id}` : `/projectview/${project.id}`;

  const [isHover, setIsHover] = useState(false);

  return (
    <Link to={moveProjectView}>
      {param === 'judge' ? (
        <div className="w-[100%] font-['Pre-S'] bg-[#2e2e2e70] text-center rounded-[0.1rem] border-solid border-[0.1rem] border-[#444444] font-semibold text-[1.7rem] text-[#EEEEEE] p-[0.3rem] mt-[2rem] mb-[0.5rem]">
          {teamName}팀
        </div>
      ) : (
        <></>
      )}
      <div
        key={project.id}
        className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%] cursor-pointer relative"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {isHover ? (
          <div className="absolute z-10 w-full h-full p-6 text-white transition-opacity duration-1000 ease-in-out bg-black rounded opacity-80">
            <div className="w-80 inline-block self-start break-words font-['Pre-R'] font-normal text-[1.3rem] text-[#FFFFFF] overflow-hidden text-ellipsis whitespace-nowrap">
              {project.title}
            </div>
            <div className="w-80 mt-[0.3rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC] overflow-hidden text-ellipsis whitespace-nowrap">
              {project.subtitle}
            </div>
            <div className="mt-[1rem] ml-[-0.25rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[1.1rem] text-[#FFFFFF] overflow-hidden leading-10 text-ellipsis text-clamp">
              {/* <MarkdownView markdown={project.content} /> */}
              <MarkdownView markdown={word} />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-center items-center rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]">
          {project.mainImageUrl ? (
            <img alt="mainImg" className="object-contain w-full h-full" src={project.mainImageUrl} />
          ) : (
            <></>
          )}
        </div>
        <div className="w-80 m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text overflow-hidden text-ellipsis whitespace-nowrap">
          {project.title}
        </div>
        <div className="w-80 m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC] overflow-hidden text-ellipsis whitespace-nowrap">
          {project.subtitle}
        </div>
        <div className="rounded-[0.3rem] m-[0_1rem_2rem_1rem] flex flex-row flex-wrap self-start w-[90%] h-[2rem] box-sizing-border">
          {firstFrontend ? (
            <div className="rounded-[0.3rem] bg-[#333333] m-[0_0.3rem_0.5rem_0.1rem] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
              <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">
                {firstFrontend.name}
              </span>
            </div>
          ) : (
            <></>
          )}
          {firstBackend ? (
            <div className="rounded-[0.3rem] bg-[#333333] m-[0_0.3rem_0.5rem_0.1rem] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
              <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">
                {firstBackend.name}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="m-[0_1rem_0_1rem] flex flex-row justify-between w-[92%] box-sizing-border">
          {/* <p className="m-[0_0.5rem_0_0] break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
            {project.projectStatusEnum === 'RUNNING' ? (
              <>
                <span className="text-[1.2rem] text-green-400">•</span>
                <span> 서비스 운영중</span>
              </>
            ) : (
              <>
                <span className="text-[1.2rem]">•</span>
                <span> 서비스 중단</span>
              </>
            )}
          </p> */}
          <div className="flex flex-row">
            <img className="w-[1.5rem] h-[1.5rem] rounded-[1rem]" src={project.writer.profileImageUrl}></img>
            <p className="m-[0.2rem_0.5rem_0_0.5rem] break-words font-['Pre-R'] font-normal text-[1rem] text-[#B0B0B0]">
              {project.writer.nickname}
            </p>
          </div>
          <span className="mt-[1rem] break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
            ♥&nbsp;&nbsp;&nbsp;
            {project.loveCount}
          </span>
        </div>
      </div>
    </Link>
  );
}
