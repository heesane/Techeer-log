import Footer from '../../../shared/ui/Footer.tsx';
import NavBar from '../../../shared/ui/NavBar.tsx';
import { MyPageProfile } from '../index.ts';

export const MyPage = () => {
  return (
    <div className="bg-[#111111] flex flex-col items-center w-[100vw] box-sizing-border">
      <NavBar scrollRef={null} />
      <div className="w-[1200px] ml-auto mr-auto mt-[8rem] mb-[8rem]">
        <MyPageProfile />
        <div className="m-[0_0_1.5rem_0] flex flex-row justify-between w-[100%] box-sizing-border">
          <span className="break-words font-['Pre-R'] font-medium text-[1.5rem] ml-28 text-[#0047FF]">
            업로드한 프로젝트
            <div className="bg-[#0047FF] z-[2] absolute w-[10.8rem] h-[0.2rem] mt-[1.45rem]"></div>
          </span>
          <span className="break-words font-['Pre-R'] font-normal text-[1.5rem] text-[#CCCCCC]">스크랩한 프로젝트</span>
          <span className="break-words font-['Pre-R'] font-normal text-[1.5rem] mr-28 text-[#CCCCCC]">
            참여한 프로젝트
          </span>
        </div>
        <div className="bg-[#444444] relative m-[0_0_6.8rem_0] w-[100%] h-[0.1rem]"></div>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 m-4">
          <div className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%]">
            <div className="bg-[url('shared/assests/ThumbNailImg.png')] bg-cover rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]"></div>
            <div className="m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text">
              어쩌구저쩌구
            </div>
            <div className="m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC]">
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </div>
            <div className="rounded-[0.3rem] m-[0_1rem_2.2rem_1rem] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="rounded-[0.3rem] bg-[#333333] relative m-[0_0.3rem_0_0] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">React</span>
              </div>
              <div className="rounded-[0.3rem] bg-[#333333] relative flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.7rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">Spring</span>
              </div>
            </div>
            <div className="m-[0_1rem_0_1rem] flex flex-row justify-between w-[21.6rem] box-sizing-border">
              <p className="m-[0_0.5rem_0_0]break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
                <span className="container-17-sub-10"></span>
                <span>• 서비스 운영중</span>
              </p>
              <span className="break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">♥︎ 129</span>
            </div>
          </div>
          <div className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%]">
            <div className="bg-[url('shared/assests/ThumbNailImg.png')] bg-cover rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]"></div>
            <div className="m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text">
              어쩌구저쩌구
            </div>
            <div className="m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC]">
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </div>
            <div className="rounded-[0.3rem] m-[0_1rem_2.2rem_1rem] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="rounded-[0.3rem] bg-[#333333] relative m-[0_0.3rem_0_0] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">React</span>
              </div>
              <div className="rounded-[0.3rem] bg-[#333333] relative flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.7rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">Spring</span>
              </div>
            </div>
            <div className="m-[0_1rem_0_1rem] flex flex-row justify-between w-[21.6rem] box-sizing-border">
              <p className="m-[0_0.5rem_0_0]break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
                <span className="container-17-sub-10"></span>
                <span>• 서비스 운영중</span>
              </p>
              <span className="break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">♥︎ 129</span>
            </div>
          </div>
          <div className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%]">
            <div className="bg-[url('shared/assests/ThumbNailImg.png')] bg-cover rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]"></div>
            <div className="m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text">
              어쩌구저쩌구
            </div>
            <div className="m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC]">
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </div>
            <div className="rounded-[0.3rem] m-[0_1rem_2.2rem_1rem] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="rounded-[0.3rem] bg-[#333333] relative m-[0_0.3rem_0_0] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">React</span>
              </div>
              <div className="rounded-[0.3rem] bg-[#333333] relative flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.7rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">Spring</span>
              </div>
            </div>
            <div className="m-[0_1rem_0_1rem] flex flex-row justify-between w-[21.6rem] box-sizing-border">
              <p className="m-[0_0.5rem_0_0]break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
                <span className="container-17-sub-10"></span>
                <span>• 서비스 운영중</span>
              </p>
              <span className="break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">♥︎ 129</span>
            </div>
          </div>
          <div className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%]">
            <div className="bg-[url('shared/assests/ThumbNailImg.png')] bg-cover rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]"></div>
            <div className="m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text">
              어쩌구저쩌구
            </div>
            <div className="m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC]">
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </div>
            <div className="rounded-[0.3rem] m-[0_1rem_2.2rem_1rem] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="rounded-[0.3rem] bg-[#333333] relative m-[0_0.3rem_0_0] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">React</span>
              </div>
              <div className="rounded-[0.3rem] bg-[#333333] relative flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.7rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">Spring</span>
              </div>
            </div>
            <div className="m-[0_1rem_0_1rem] flex flex-row justify-between w-[21.6rem] box-sizing-border">
              <p className="m-[0_0.5rem_0_0]break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
                <span className="container-17-sub-10"></span>
                <span>• 서비스 운영중</span>
              </p>
              <span className="break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">♥︎ 129</span>
            </div>
          </div>
          <div className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%]">
            <div className="bg-[url('shared/assests/ThumbNailImg.png')] bg-cover rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]"></div>
            <div className="m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text">
              어쩌구저쩌구
            </div>
            <div className="m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC]">
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </div>
            <div className="rounded-[0.3rem] m-[0_1rem_2.2rem_1rem] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="rounded-[0.3rem] bg-[#333333] relative m-[0_0.3rem_0_0] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">React</span>
              </div>
              <div className="rounded-[0.3rem] bg-[#333333] relative flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.7rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">Spring</span>
              </div>
            </div>
            <div className="m-[0_1rem_0_1rem] flex flex-row justify-between w-[21.6rem] box-sizing-border">
              <p className="m-[0_0.5rem_0_0]break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
                <span className="container-17-sub-10"></span>
                <span>• 서비스 운영중</span>
              </p>
              <span className="break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">♥︎ 129</span>
            </div>
          </div>
          <div className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%]">
            <div className="bg-[url('shared/assests/ThumbNailImg.png')] bg-cover rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]"></div>
            <div className="m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text">
              어쩌구저쩌구
            </div>
            <div className="m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC]">
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </div>
            <div className="rounded-[0.3rem] m-[0_1rem_2.2rem_1rem] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="rounded-[0.3rem] bg-[#333333] relative m-[0_0.3rem_0_0] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">React</span>
              </div>
              <div className="rounded-[0.3rem] bg-[#333333] relative flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.7rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">Spring</span>
              </div>
            </div>
            <div className="m-[0_1rem_0_1rem] flex flex-row justify-between w-[21.6rem] box-sizing-border">
              <p className="m-[0_0.5rem_0_0]break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
                <span className="container-17-sub-10"></span>
                <span>• 서비스 운영중</span>
              </p>
              <span className="break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">♥︎ 129</span>
            </div>
          </div>
          <div className="rounded-[0.3rem] border-solid border border-[#444444] flex flex-col p-[0_0_1rem_0] box-sizing-border w-[100%]">
            <div className="bg-[url('shared/assests/ThumbNailImg.png')] bg-cover rounded-[0.3rem] m-[0_0_1.3rem_0] w-[99.9%] h-[15rem]"></div>
            <div className="m-[0_1rem_0.4rem_1rem] inline-block self-start break-words font-['Pre-S'] font-semibold text-[1.3rem] bg-[#FFFFFF] text-[transparent] bg-clip-text">
              어쩌구저쩌구
            </div>
            <div className="m-[0_1rem_0.7rem_1rem] inline-block self-start break-words font-['Pre-R'] font-normal text-[0.9rem] text-[#CCCCCC]">
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </div>
            <div className="rounded-[0.3rem] m-[0_1rem_2.2rem_1rem] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="rounded-[0.3rem] bg-[#333333] relative m-[0_0.3rem_0_0] flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.6rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">React</span>
              </div>
              <div className="rounded-[0.3rem] bg-[#333333] relative flex flex-row justify-center p-[0.3rem_0.7rem_0.2rem_0.7rem] box-sizing-border">
                <span className="break-words font-['Pre-R'] font-semibold text-[0.8rem] text-[#FFFFFF]">Spring</span>
              </div>
            </div>
            <div className="m-[0_1rem_0_1rem] flex flex-row justify-between w-[21.6rem] box-sizing-border">
              <p className="m-[0_0.5rem_0_0]break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">
                <span className="container-17-sub-10"></span>
                <span>• 서비스 운영중</span>
              </p>
              <span className="break-words font-['Pre-R'] font-normal text-[0.8rem] text-[#B0B0B0]">♥︎ 129</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
