import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { ProjectDropDown } from './ProjectDropDown.tsx';
import { useState } from 'react';
import { UserDropDown } from './UserDropDown.tsx';
export default function NavBar() {
  const { nickname } = useAuthStore();
  const [selectedType, setSelectedType] = useState<string>('프로젝트');
  const [selectedMenu, setSelectedMenu] = useState<string>(nickname || '');
  const [activeTab] = useState<string>('소개');

  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed top-0 w-screen flex justify-center items-center z-50 backdrop-blur-[4px]">
      <div className="flex flex-row items-center justify-between py-2 px-3 w-[1300px] box-sizing-border ">
        <div className="flex flex-row justify-center my-2 gap-[3rem]">
          <span
            onClick={() => window.location.replace('/')}
            className="cursor-pointer break-words font-['Bayon'] font-normal text-[2.3rem] text-[#EFEFEF]"
          >
            TECHEER
          </span>
        </div>
        <div className="flex flex-row justify-between items-center gap-[2.5rem] h-[fit-content] box-sizing-border text-[1.2rem] font-[500]">
          <div className="flex flex-row items-center text-[1.2rem] text-[#cccccc] font-[500]  gap-[2.5rem] mt-[0.2rem]">
            <span
              onClick={() => handleNavigation('/')}
              className={`cursor-pointer hover:text-[#FFFFFF] ${
                activeTab === '소개' ? 'text-[#FFFFFF]' : 'text-[#cccccc]'
              }`}
            >
              소개
            </span>

            <ProjectDropDown defaultName="프로젝트" selectedType={selectedType} setSelectedType={setSelectedType} />
          </div>

          <div className="rounded-[0.3rem] flex flex-row justify-center box-sizing-border">
            {nickname ? (
              <UserDropDown defaultName={nickname} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            ) : (
              <span
                onClick={() => handleNavigation('/login')}
                className={`cursor-pointer break-words font-['Pretendard'] leading-[1.5] ${
                  activeTab === 'login' ? 'text-[#FFFFFF]' : 'text-[#cccccc]'
                } hover:text-[#FFFFFF]`}
              >
                LOGIN
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
