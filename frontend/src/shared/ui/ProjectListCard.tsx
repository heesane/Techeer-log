import { Project } from '../types/projectList.ts';
import { Link, useParams } from 'react-router-dom';
import GithubIcon from '../assets/image/projectViewImg/Icon-Github.png';
import BlogIcon from '../assets/image/projectViewImg/Icon-Medium.png';
interface propsProjects {
  project: Project;
}
export default function ProjectListCard({ project }: propsProjects) {
  const firstFrontend = project.frameworkResponseList.find((framework) => framework.frameworkTypeEnum === 'FRONTEND');
  const firstBackend = project.frameworkResponseList.find((framework) => framework.frameworkTypeEnum === 'BACKEND');
  const teamName = project.projectTeamNameEnum;

  const { param } = useParams();
  const moveProjectView = param === 'judge' ? `/2024-summer-bootcamp/project/${project.id}` : `/project/${project.id}`;

  return (
    <>
      {param === 'judge' ? (
        <div className="w-[100%] font-['Pre-S'] bg-[#2e2e2e70] text-center rounded-[0.1rem] border-solid border-[0.1rem] border-[#444444] font-semibold text-[1.7rem] text-[#EEEEEE] p-[0.3rem] mt-[2rem] mb-[0.5rem]">
          {teamName}팀
        </div>
      ) : (
        <></>
      )}
      <Link to={moveProjectView}>
        <div
          key={project.id}
          className="h-[14rem] rounded-[0.3rem] border-solid border border-[#444444] flex p-[1rem] box-sizing-border w-[100%] relative transform transition-transform duration-300 ease-in-out hover:scale-105 mb-[1.3rem]"
        >
          {/* <div className="absolute z-10 w-full h-full p-6 text-white transition-opacity duration-1000 ease-in-out bg-black rounded opacity-80">
            <div className="w-80 inline-block self-start break-words font-['Pre-R'] font-bold text-[1.7rem] text-[#FFFFFF] overflow-hidden text-ellipsis whitespace-nowrap">
              {project.title}
            </div>
            <div className="w-80 mt-[1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[1.4rem] text-[#FFFFFF] overflow-hidden text-ellipsis whitespace-nowrap text-clamp">
              한 줄 소개 : {project.subtitle}
            </div>
            <div className="w-80 mt-[1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[1.4rem] text-[#FFFFFF] overflow-hidden text-ellipsis whitespace-nowrap text-clamp">
              대표 기술 : {firstFrontend?.name}, {firstBackend?.name}
            </div>
            <div className="absolute bottom-[2rem] flex flex-row gap-[1rem]">
              <button className="flex flex-row gap-[0.3rem] cursor-pointer">
                <p className="text-[1.3rem] font-semibold">Detail</p>
                <img className="h-[1.4rem] w-[1.4rem] mt-[0.08rem]" src={arrow}></img>
              </button>
              {project.githubLink ? (
                <Link to={project.githubLink}>
                  <button className="flex flex-row gap-[0.3rem] cursor-pointer">
                    <p className="text-[1.3rem] font-semibold">Github</p>
                    <img className="h-[1.4rem] w-[1.4rem] mt-[0.08rem]" src={arrow}></img>
                  </button>
                </Link>
              ) : (
                <></>
              )}
              {project.blogLink ? (
                <Link to={project.blogLink}>
                  <button className="flex flex-row gap-[0.3rem] cursor-pointer">
                    <p className="text-[1.3rem] font-semibold">Blog</p>
                    <img className="h-[1.4rem] w-[1.4rem] mt-[0.08rem]" src={arrow}></img>
                  </button>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div> */}
          {project.rankEnum !== 'NONE' ? (
            <div className="absolute w-0 h-0 border-solid border-0 border-r-[5rem] border-b-[5rem] border-transparent border-r-[#2B00AD] top-0 right-0">
              <p className="absolute w-[3rem] ml-[2rem] mt-[1.3rem] text-[1rem] font-semibold text-white rotate-[45deg]">
                수상작
              </p>
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-row mt-[1rem]">
            <div className="flex w-[18rem] rounded-[0.3rem] h-full max-w-none">
              {project.mainImageUrl ? (
                <img
                  alt="mainImg"
                  className="w-[18rem] h-[10rem] rounded-[0.3rem] max-w-none"
                  src={project.mainImageUrl}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col ml-[1.5rem]">
              <div className="flex">
                <div className="max-w-[15rem] m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.5rem] bg-[#FFFFFF] text-[transparent] bg-clip-text overflow-hidden text-ellipsis whitespace-nowrap">
                  {project.title}
                </div>
                <div className="w-80 mt-[0.2rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[1.2rem] text-[#CCCCCC] overflow-hidden text-ellipsis whitespace-nowrap text-clamp">
                  {project.year}
                  {project.semesterEnum === 'FIRST'
                    ? ' 동계 부트캠프'
                    : project.semesterEnum === 'SECOND'
                      ? ' 하계 부트캠프'
                      : ''}
                </div>
              </div>
              <div className="w-80 h-[3rem] m-[0.4rem_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[1.1rem] text-[#CCCCCC] overflow-hidden text-ellipsis whitespace-nowrap text-clamp">
                {project.subtitle}
              </div>
              <div className="rounded-[0.3rem] m-[1.5rem_0_0_1rem] flex flex-row flex-wrap self-start w-[90%] box-sizing-border gap-[0.5rem]">
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
            </div>
            <div className="absolute bottom-[2.2rem] right-[2rem] flex flex-row items-center gap-4 box-sizing-border">
              {project.githubLink && (
                <div className="flex hover:scale-110">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} className="cursor-pointer w-[2rem] h-[2rem]" />
                  </a>
                </div>
              )}
              {project.blogLink && (
                <div className="flex hover:scale-110">
                  <a href={project.blogLink} target="_blank" rel="noopener noreferrer">
                    <img src={BlogIcon} className="cursor-pointer ml-1 w-[2rem] h-[2rem]" />
                  </a>
                </div>
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
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
