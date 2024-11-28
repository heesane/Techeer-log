import * as textEdit from '../../textEdit/index.ts';
import { useMutation } from '@tanstack/react-query';
import { changeProfile } from '../index.ts';
import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import PasswordInput from './PasswordInput.tsx';
import { patchPassword } from '../api/patchPassword.ts';
import { PasswordData } from '../types/PasswordData.ts';

type ProfileModalProps = {
  setIsModal: (value: boolean) => void;
  id: string;
};
export const ProfileModal = ({ setIsModal, id }: ProfileModalProps) => {
  const fileInputRef = useRef(null);
  const [newNickname, setNewNickname] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [newProfileImageUrl, setNewProfileImageUrl] = useState('');
  const [nowImage, setNowImage] = useState<File | null>(null);

  // 프로필 이미지 설정
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length === 1) {
      uploadImageMutation.mutate(files[0]);
      setNowImage(files[0]);
    }
  };
  const handleImageUpload = async () => {
    if (fileInputRef.current) (fileInputRef.current as HTMLInputElement).click();
  };

  const uploadImageMutation = useMutation({
    mutationFn: (selectedImage: File) => textEdit.uploadImage(selectedImage),
    onSuccess: (response: any) => {
      setNewProfileImageUrl(response);
    },
    onError: (error: any) => {
      console.error(error);
      alert('이미지 업로드에 실패하였습니다.');
    },
  });

  const submitProfileChange = () => {
    if (newNickname === '' || introduction === '') {
      alert('닉네임과 한 줄 소개를 입력해주세요.');
    } else {
      const formData = new FormData();
      const data = {
        nickname: newNickname,
        introduction: introduction,
      };
      const jsonData = JSON.stringify(data);
      formData.append('data', jsonData);
      if (nowImage) {
        formData.append('part', nowImage);
      }
      changeProfileMutation.mutate(formData);
      setIsModal(false);
    }
  };

  const changeProfileMutation = useMutation({
    mutationFn: (formData: any) => changeProfile(formData),
    onSuccess: () => {
      alert('프로필 수정이 완료되었습니다.');
      setIsModal(false);
    },
    onError: (error: any) => {
      console.error(error);
      alert('이미지 업로드에 실패하였습니다.');
    },
  });

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const changePassword = useMutation({
    mutationFn: ({ currentPassword, newPassword }: PasswordData) => patchPassword({ currentPassword, newPassword }),
    onSuccess: () => {
      alert('비밀번호가 변경되었습니다.');
      setIsModal(false);
    },
    onError: () => {
      alert('비밀번호 변경에 실패했습니다.');
    },
  });

  return (
    <>
      <div className="rounded-[16.3rem] flex flex-row w-[100%] box-sizing-border justify-center">
        <input
          style={{ display: 'none' }}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
        />
        <button
          onClick={handleImageUpload}
          className="rounded-[16.3rem] border bg-[50%_50%] bg-cover bg-no-repeat m-[1rem_5.6rem_0_0] w-[9.4rem] h-[9.4rem]"
        >
          {newProfileImageUrl !== '' ? (
            <img className="w-full h-full rounded-[16.3rem]" src={newProfileImageUrl}></img>
          ) : (
            <div className="text-white">이미지 변경하기</div>
          )}
        </button>
        <div className="flex flex-col w-fit">
          <div className="flex flex-col box-sizing-border">
            <div className="mb-5 ml-1 break-words font-['pre'] font-medium text-[1.5rem] text-[#cccccc]">
              <p className="text-[1rem] text-[#cccccc] mb-1">아이디</p>
              {id}
            </div>
            <div className="flex-col">
              <p className="font-['Pre'] font-medium text-[1rem] text-[#cccccc] mb-3 ml-1">프로필 수정</p>
              <div className="m-[0_0_1rem_0] flex flex-row">
                <TextField
                  label="닉네임"
                  autoComplete="off"
                  size="small"
                  value={newNickname}
                  onChange={(e) => setNewNickname(e.target.value)}
                  InputLabelProps={{ style: { color: '#CCCCCC' } }}
                  InputProps={{
                    sx: {
                      width: '17ch',
                      marginRight: '2ch',
                      color: '#CCCCCC',
                      fontSize: 'large',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#CCCCCC',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#AAAAAA',
                      },
                    },
                  }}
                />
                <TextField
                  label="한 줄 소개"
                  autoComplete="off"
                  size="small"
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  InputLabelProps={{ style: { color: '#CCCCCC' } }}
                  InputProps={{
                    sx: {
                      width: '30ch',
                      color: '#CCCCCC',
                      fontSize: 'large',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#CCCCCC',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#AAAAAA',
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex-col">
              <p className="font-['Pre'] font-medium text-[1rem] text-[#0063ff] my-3 ml-1">비밀번호 변경</p>
              <div className="flex-row gap-4">
                <PasswordInput
                  label="현재 비밀번호"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <PasswordInput
                  label="새로운 비밀번호"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[1rem]">
            <div
              onClick={() => setIsModal(false)}
              className="rounded-[0.3rem] m-[2.8rem_0rem_0_0] bg-[#8A8991] flex flex-row justify-center items-center w-[8rem] h-[2.1rem] box-sizing-border cursor-pointer"
            >
              <span className="break-words font-medium text-[0.9rem] leading-[1.286] text-[#F1EEF9]">취소</span>
            </div>

            <div
              onClick={() => submitProfileChange()}
              className="rounded-[0.3rem] m-[2.8rem_0rem_0_0] bg-[#8A8991] flex flex-row justify-center items-center w-[8rem] h-[2.1rem] box-sizing-border cursor-pointer"
            >
              <span className="break-words font-medium text-[0.9rem] leading-[1.286] text-[#F1EEF9]">프로필 수정</span>
            </div>
            <div
              onClick={() => changePassword.mutate({ currentPassword, newPassword })}
              className="rounded-[0.3rem] m-[2.8rem_0rem_0_0] bg-[#0047FF] flex flex-row justify-center items-center w-[8rem] h-[2.1rem] box-sizing-border cursor-pointer"
            >
              <span className="break-words font-medium text-[0.9rem] leading-[1.286] text-[#F1EEF9]">
                비밀번호 변경
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
