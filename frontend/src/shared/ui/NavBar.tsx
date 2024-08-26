import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { HeaderDropDown } from './HeaderDropDown.tsx';
import { useState } from 'react';
export default function NavBar() {
  const [selectedType, setSelectedType] = useState<string>('프로젝트');

  const { logout, nickname } = useAuthStore();
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    window.location.replace('/');
  };
  const goProjectWrite = () => {
    navigate('/projectwrite');
  };

  return (
    <div className="fixed top-0 w-screen flex justify-center items-center z-50 backdrop-blur-[4px] bg-[#111111]">
      <div className="flex flex-row items-center justify-between py-2 px-3 w-[1300px] box-sizing-border ">
        <div className="flex flex-row justify-center my-2">
          <span
            onClick={() => window.location.replace('/')}
            className="cursor-pointer break-words font-['Bayon'] font-normal text-[2.4rem] text-[#EFEFEF]"
          >
            TECHEER
          </span>
        </div>
        <div className="flex flex-row justify-between items-center gap-[2.5rem] h-[fit-content] box-sizing-border text-[1.2rem] font-[500]">
          <div className="flex flex-row justify-center box-sizing-border">
            {nickname && (
              <span
                onClick={goProjectWrite}
                className="cursor-pointer break-words font-['Pretendard'] leading-[1.5] text-[#FFFFFF]"
              >
                새 프로젝트 작성
              </span>
            )}
          </div>
          <div className="flex flex-row justify-center box-sizing-border">
            {nickname && (
              <span
                onClick={() => navigate('/mypage')}
                className="cursor-pointer break-words font-['Pretendard'] leading-[1.5] text-[#FFFFFF]"
              >
                마이페이지
              </span>
            )}
          </div>
          <div className="flex flex-row justify-center box-sizing-border items-center">
            <HeaderDropDown selectedType={selectedType} setSelectedType={setSelectedType} />
          </div>
          <div className="rounded-[0.3rem] flex flex-row justify-center box-sizing-border">
            {!nickname ? (
              <span
                onClick={goLogin}
                className="cursor-pointer break-words font-['Pretendard'] leading-[1.5] text-[#cccccc]"
              >
                LOGIN
              </span>
            ) : (
              <span
                onClick={handleLogout}
                className="cursor-pointer break-words font-['Pretendard'] leading-[1.5] text-[#FFFFFF]"
              >
                LOGOUT
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
