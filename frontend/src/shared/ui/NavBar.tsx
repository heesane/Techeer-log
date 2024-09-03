import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useEffect, useState } from 'react';
import { UserDropDown } from './UserDropDown.tsx';
export default function NavBar() {
  const { nickname } = useAuthStore();
  // const [selectedMenu, setSelectedMenu] = useState<string>('');

  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = (pathname: string) => {
    if (pathname === '/') return '소개';
    if (pathname.startsWith('/project')) return '프로젝트';
    if (pathname.startsWith('/mypage')) return '마이페이지';
    return '';
  };

  const [activeTab, setActiveTab] = useState<string>(getActiveTab(location.pathname));

  useEffect(() => {
    setActiveTab(getActiveTab(location.pathname));
  }, [location.pathname]);

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
            <span
              onClick={() => handleNavigation('/project')}
              className={`cursor-pointer hover:text-[#FFFFFF] ${
                activeTab === '프로젝트' ? 'text-[#FFFFFF]' : 'text-[#cccccc]'
              }`}
            >
              프로젝트
            </span>
          </div>

          <div className="rounded-[0.3rem] flex flex-row justify-center box-sizing-border">
            {nickname ? (
              <UserDropDown defaultName={nickname} />
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
