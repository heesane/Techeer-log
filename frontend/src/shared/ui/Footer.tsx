import mail from '../../shared/assets/image/footer/email.svg';
import github from '../../shared/assets/image/footer/github.svg';
import instagram from '../../shared/assets/image/footer/instagram.svg';
import medium from '../../shared/assets/image/footer/medium.svg';
import notion from '../../shared/assets/image/footer/notion.svg';

const Footer = () => {
  return (
    <div className="bg-[#212121] flex flex-row justify-center items-center w-screen py-8">
      <div className="flex flex-row justify-between items-center w-[1300px] px-4">
        <div className="flex flex-col gap-2 justify-center">
          <span className="break-words font-['Bayon'] font-normal text-[2.2rem] leading-[1.5] text-[#FFFFFF]">
            TECHEER
          </span>
          <span className="break-words font-['Pretendard'] font-normal text-[1.1rem] leading-[1.5] text-[#fafafa]">
            TECHEER (테커)
          </span>
          <span className="break-words font-['Pretendard'] font-normal text-[1rem] leading-[1.5] text-[#fafafa]">
            <span>ⓒ 2024 TECHEER.LOG. All rights reserved.</span>
          </span>
        </div>

        <div className="flex flex-row gap-[1.5rem] ">
          <a href="mailto:techeerlog@gmail.com">
            <div className="bg-[#474749] h-[3.5rem] w-[3.5rem] rounded-[50%] justify-center flex items-center">
              <img className="flex scale-[55%]" src={mail} alt="Mail" />
            </div>
          </a>
          <a href="https://www.instagram.com/techeer_in_sv" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#474749] h-[3.5rem] w-[3.5rem] justify-center flex items-center rounded-[50%] mt-[0.1rem]">
              <img className="flex scale-[50%]" src={instagram} alt="Instagram" />
            </div>
          </a>
          <a href="https://techeer.net" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#474749] h-[3.5rem] w-[3.5rem] rounded-[50%] justify-center flex items-center">
              <img className="flex scale-[60%]" src={notion} alt="Notion" />
            </div>
          </a>
          <a href="https://blog.techeer.net" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#474749] h-[3.5rem] w-[3.5rem] rounded-[50%] justify-center flex items-center">
              <img className="flex scale-[60%]" src={medium} alt="Medium" />
            </div>
          </a>
          <a href="https://github.com/techeer-sv" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#474749] h-[3.5rem] w-[3.5rem] rounded-[50%] justify-center flex items-center">
              <img className="flex scale-[65%]" src={github} alt="GitHub" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
