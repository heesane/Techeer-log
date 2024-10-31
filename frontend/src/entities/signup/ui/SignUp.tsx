import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../shared/api/axiosInstance.ts';

export function SignUp() {
  const [nickname, setNickname] = useState('');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const navigate = useNavigate();
  const nicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const loginIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(event.target.value);
  };

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (passwordConfirmation !== '' && event.target.value !== passwordConfirmation) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const passwordConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(event.target.value);
    if (password !== event.target.value) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSignup();
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axiosInstance.post('/api/v1/members/signup', {
        loginId,
        nickname,
        password,
        passwordConfirmation,
      });
      navigate('/login');
      if (response.data.status != '200') {
        return Error;
      }
    } catch (error) {
      console.log('error', error);
      alert('회원가입 정보를 확인해주세요.');
    }
  };

  const handleSubmit = async () => {
    handleSignup();
  };

  return (
    //   확인용 배경 박스
    <div className="bg-[#111111] bg-opacity-90 flex w-screen h-screen justify-center items-center">
      <div className="rounded-[20px] bg-[url('./shared/assets/image/signupImg/signup.webp')] bg-cover bg-no-repeat flex flex-row w-[960px] h-[600px] box-sizing-border">
        {/*왼쪽 박스*/}
        <div className="flex flex-col justify-center ml-8 box-sizing-border w-[55%] gap-2">
          <p className="break-words font-['Bayon'] font-normal text-[3rem] text-[#FFFFFF]">Techeer.log</p>
          <p className="inline-block self-start break-words font-['Pretendard'] font-semibold text-[1.4rem] text-[#FFFFFF]">
            환영합니다!
          </p>
          <p className="break-words font-['Pretendard'] font-light text-[1rem] text-[#FFFFFF]">
            테커에서 진행한 <span className="font-bold">당신의 프로젝트</span>를
            <span className="font-bold"> Techeer.log에 공유</span>해주세요!
          </p>
        </div>
        {/*오른쪽 박스*/}
        <div className="gap-4 backdrop-blur-[1.3rem] rounded-r-[20px] bg-[rgba(45,46,114,0.7)] flex flex-col justify-center items-center p-[0_2.5rem_0_2.5rem] w-[45%] box-sizing-border">
          <div className="mb-8 inline-block break-words font-['Pretendard'] font-semibold text-[2rem] text-[#F0F0F0]">
            회원가입
          </div>
          <div className="flex gap-4 sitems-center box-sizing-border">
            <div className="flex flex-col mt-2 mb-8 mr-2 items-start gap-[2.5rem]">
              <p className="text-[1rem] leading-7 font-semibold mb-30 text-[#ECEFF5]">이름</p>
              <p className="text-[1rem] leading-7 font-semibold mb-30 text-[#ECEFF5]">아이디</p>
              <p className="text-[1rem] leading-7 font-semibold mb-30 text-[#ECEFF5]">비밀번호</p>
              <p className="text-[1rem] leading-7 font-semibold mb-30 text-[#ECEFF5]">비밀번호 확인</p>
            </div>
            <div className="flex flex-col mb-8 items-start gap-[1.8rem]">
              <label className="block">
                <input
                  type="text"
                  name="nickname"
                  placeholder="이름을 입력하세요"
                  required
                  className="h-10 w-[14rem] text-white bg-transparent border-b-2 border-gray-400 focus:border-white outline-none"
                  value={nickname}
                  onChange={nicknameChange}
                  onKeyDown={handleKeyPress}
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  name="loginId"
                  placeholder="아이디를 입력하세요"
                  required
                  className="w-[14rem] h-10 text-white bg-transparent border-b-2 border-gray-400 focus:border-white outline-none"
                  value={loginId}
                  onChange={loginIdChange}
                  onKeyDown={handleKeyPress}
                />
              </label>
              <label className="block">
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                  className="w-[14rem] h-10 text-white bg-transparent border-b-2 border-gray-400 focus:border-white outline-none"
                  value={password}
                  onChange={passwordChange}
                  onKeyDown={handleKeyPress}
                />
              </label>
              <label className="block">
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="비밀번호를 한번 더 입력하세요"
                  required
                  className="w-[14rem] h-10 text-white bg-transparent border-b-2 border-gray-400 focus:border-white outline-none `${ passwordMatchError ? 'border-red-500' : ''}`"
                  value={passwordConfirmation}
                  onChange={passwordConfirmationChange}
                  onKeyDown={handleKeyPress}
                />
                {passwordMatchError && (
                  <p className="mt-[0.313rem] text-sm text-red-500">비밀번호가 일치하지 않습니다.</p>
                )}
              </label>
            </div>
            {/*<div className="flex items-center gap-4 mb-8">*/}
            {/*  <label className="block">*/}
            {/*    <input*/}
            {/*      type="text"*/}
            {/*      name="nickname"*/}
            {/*      placeholder="이름을 입력하세요"*/}
            {/*      required*/}
            {/*      className="w-[15rem] h-10 text-white bg-transparent border-b-2 border-gray-400 focus:border-white outline-none"*/}
            {/*    />*/}
            {/*  </label>*/}
            {/*</div>*/}
            {/*<div className="flex items-center gap-4 mb-8">*/}
            {/*  <p className="text-[1.1rem] leading-7 pt-0 font-semibold mb-30 text-[#ECEFF5]">아이디</p>*/}
            {/*  <label className="block">*/}
            {/*    <input*/}
            {/*      type="text"*/}
            {/*      name="loginId"*/}
            {/*      placeholder="아이디를 입력하세요"*/}
            {/*      required*/}
            {/*      className="w-[15rem] h-10 text-white bg-transparent border-b-2 border-gray-400 focus:border-white outline-none"*/}
            {/*    />*/}
            {/*  </label>*/}
            {/*</div>*/}
            {/*<div className="flex items-center gap-4 mb-8">*/}
            {/*  <p className="text-[1.1rem] leading-7 font-semibold mb-30 text-[#ECEFF5]">비밀번호</p>*/}
            {/*  <label className="block">*/}
            {/*    <input*/}
            {/*      type="password"*/}
            {/*      name="password"*/}
            {/*      placeholder="비밀번호를 입력하세요"*/}
            {/*      required*/}
            {/*      className="w-[15rem] h-10 text-white bg-transparent border-b-2 border-gray-400 focus:border-white outline-none"*/}
            {/*    />*/}
            {/*  </label>*/}
            {/*</div>*/}
            {/*<div className="flex items-center gap-4 mb-8">*/}
            {/*  <p className="text-[1rem] leading-7 font-semibold mb-30 text-[#ECEFF5]">비밀번호 확인</p>*/}
            {/*  <label className="block">*/}
            {/*    <input*/}
            {/*      type="password"*/}
            {/*      name="passwordconfirmation"*/}
            {/*      placeholder="비밀번호를 한번 더 입력하세요"*/}
            {/*      required*/}
            {/*      className="w-[14rem] h-10 text-white bg-transparent border-b-2 border-gray-400 focus:border-white outline-none"*/}
            {/*    />*/}
            {/*  </label>*/}
            {/*</div>*/}
          </div>
          <button
            type="submit"
            className="ml-4 rounded-[6px] bg-[#471993] flex flex-row justify-center w-[23rem] box-sizing-border"
            onClick={handleSubmit}
          >
            <span className="cursor-pointer break-words font-['Pretendard'] font-normal text-[1rem] leading-[3] text-[#F0F0F0]">
              회원가입
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
