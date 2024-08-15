import * as textEdit from '../../textEdit/index.ts';
import { useMutation } from '@tanstack/react-query';
import { changeProfile } from '../index.ts';
import { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';

export const ProfileModal = ({ setIsModal }: any) => {
  const fileInputRef = useRef(null);
  const [newNickname, setNewNickname] = useState('');
  const [email, setEmail] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [newProfileImageUrl, setNewProfileImageUrl] = useState('');

  // 프로필 이미지 설정
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length === 1) {
      uploadImageMutation.mutate(files[0]);
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
    const FormData = {
      nickname: newNickname,
      email: email,
      introduction: introduction,
    };
    changeProfileMutation.mutate(FormData);
  };
  // 프로필 수정
  const changeProfileMutation = useMutation({
    mutationFn: (selectedImage: File) => textEdit.uploadImage(selectedImage),
    onSuccess: (response: any) => {
      changeProfile;
      // 프로필 수정해야함
    },
    onError: (error: any) => {
      console.error(error);
      alert('이미지 업로드에 실패하였습니다.');
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
          className="rounded-[16.3rem] border bg-[50%_50%] bg-cover bg-no-repeat m-[4rem_5.6rem_0_0] w-[9.4rem] h-[9.4rem]"
        >
          <img className="w-full h-full rounded-[16.3rem]" src={newProfileImageUrl}></img>
        </button>
        <div className="flex flex-col box-sizing-border">
          <div className="m-[0_0_1rem_0] inline-block self-start break-words font-['Pre-S'] font-semibold text-[2.5rem] text-[#0047FF]">
            thisisid
          </div>
          <div className="m-[0_0_1rem_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <TextField
              label="닉네임"
              autoComplete="off"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              InputLabelProps={{ style: { color: '#CCCCCC' } }}
              InputProps={{
                sx: {
                  marginRight: '0.7rem',
                  color: '#CCCCCC',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#CCCCCC',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#AAAAAA', // hover 시 border 색상
                  },
                },
              }}
            />
            <TextField
              label="이메일"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ style: { color: '#CCCCCC' } }}
              InputProps={{
                sx: {
                  color: '#CCCCCC',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#CCCCCC',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#AAAAAA', // hover 시 border 색상
                  },
                },
              }}
            />
          </div>
          <TextField
            label="한 줄 소개"
            autoComplete="off"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            InputLabelProps={{ style: { color: '#CCCCCC' } }}
            InputProps={{
              sx: {
                color: '#CCCCCC',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#CCCCCC',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#AAAAAA', // hover 시 border 색상
                },
              },
            }}
          />
        </div>
      </div>
      <div
        onClick={() => submitProfileChange()}
        className="rounded-[0.3rem] m-[4rem_0rem_11.1rem_0] bg-[#8A8991] flex flex-row justify-center items-center w-[8rem] h-[2.1rem] box-sizing-border cursor-pointer"
      >
        <span className="break-words font-medium text-[0.9rem] leading-[1.286] text-[#F1EEF9)]">프로필 수정완료</span>
      </div>
    </>
  );
};
