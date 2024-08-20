import Footer from '../shared/ui/Footer.tsx';
import NavBar from '../shared/ui/NavBar.tsx';
import ScrapList from '../entities/myPage/ui/scrapList.tsx';
import { useRef } from 'react';

export const MyPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="bg-[#111111] flex flex-col items-center w-screen box-sizing-border">
      <NavBar scrollRef={scrollRef} />
      <div className="w-screen flex flex-col items-center ml-auto mr-auto mt-[8rem] mb-[8rem]">
        <div className="rounded-[16.3rem] m-[0_0_11.1rem_0] flex flex-row w-[100%] box-sizing-border justify-center">
          <div className="rounded-[16.3rem] bg-[url('shared/assests/BigProfileImg.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_5.6rem_0_0] w-[9.4rem] h-[9.4rem]"></div>
          <div className="m-[0_0_0.1rem_0] flex flex-col box-sizing-border">
            <div className="m-[0_0_0.1rem_0] inline-block self-start break-words font-['Pre-S'] font-semibold text-[2.5rem] text-[#0047FF]">
              thisisid
            </div>
            <div className="m-[0_0_2.7rem_0] flex flex-row self-start w-[fit-content] box-sizing-border">
              <span className="m-[0_0.7rem_0_0] break-words font-['Pre-S'] font-semibold text-[1.5rem] text-[#B3B3B3]">
                이이름
              </span>
              <span className="m-[0_0rem_0_0] break-words font-['Pre-R'] font-normal text-[1.5rem] text-[#B3B3B3]">
                thistisemail@email.com
              </span>
            </div>
            <span className="break-words font-['Pre-R'] font-normal text-[1.6rem] text-[#EDEDED]">
              한 줄 소개입니다. 한 줄 소개입니다. 한 줄 소개입니다.
            </span>
          </div>
        </div>
        <div className="m-[0_0_1.5rem_0] flex flex-row justify-center gap-[30rem] w-[100%] box-sizing-border">
          <span className="break-words font-['Pre-R'] font-medium text-[1.5rem] text-[#0047FF]">
            업로드한 프로젝트
            <div className="bg-[#0047FF] z-[2] absolute w-[10.8rem] h-[0.2rem] mt-[1.45rem]"></div>
          </span>
          <span className="break-words font-['Pre-R'] font-normal text-[1.5rem] text-[#CCCCCC]">스크랩한 프로젝트</span>
          {/* <span className="break-words font-['Pre-R'] font-normal text-[1.5rem] mr-28 text-[#CCCCCC]">
            참여한 프로젝트
          </span> */}
        </div>
        <div className="bg-[#444444] relative m-[0_0_6.8rem_0] w-[100%] h-[0.1rem]"></div>
        {/* <div className="flex flex-col items-center justify-center mb-12"> */}
        <div className="w-[75rem] flex flex-col justify-center mb-[15rem]">
          <ScrapList />
        </div>
      </div>
      <Footer />
    </div>
  );
};
