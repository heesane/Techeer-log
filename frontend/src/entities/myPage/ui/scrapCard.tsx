import { Link } from 'react-router-dom';
import { Scrap } from '../types/scrapList.ts';

interface propsScraps {
  scrap: Scrap;
}

export default function ScrapCard({ scrap }: propsScraps) {
  const firstFrontend = scrap.frameworkResponseList.find((framework) => framework.frameworkTypeEnum === 'FRONTEND');
  const firstBackend = scrap.frameworkResponseList.find((framework) => framework.frameworkTypeEnum === 'BACKEND');

  const moveProjectView = `/project/${scrap.projectId}`;

  return (
    <Link to={moveProjectView}>
      <div
        key={scrap.projectId}
        className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%] cursor-pointer"
      >
        <div className="flex justify-center items-center rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]">
          {scrap.mainImageUrl ? (
            <img alt="mainImg" className="object-contain w-full h-full" src={scrap.mainImageUrl} />
          ) : (
            <></>
          )}
        </div>
        <div className="w-80 m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text overflow-hidden text-ellipsis whitespace-nowrap">
          {scrap.title}
        </div>
        <div className="w-80 m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC] overflow-hidden text-ellipsis whitespace-nowrap">
          {scrap.subtitle}
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
    </Link>
  );
}
