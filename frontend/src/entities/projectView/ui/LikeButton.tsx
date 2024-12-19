/*좋아요, 저장, 공유버튼 페이지*/
import LikeFillIcon from '../../../shared/assets/image/projectViewImg/Icon-Like-Fill.svg';
import LikeIcon from '../../../shared/assets/image/projectViewImg/Icon-Like.svg';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLike, deleteLike } from '../api/like.ts';
import { useAuthStore } from '../../../shared/store/authStore.ts';

interface LikeData {
  projectId: number;
  loveCount: number;
  isLoved: boolean;
}

export const LikeButton = ({ projectId, loveCount, isLoved }: LikeData) => {
  const [isLike, setIsLike] = useState<boolean>(isLoved);
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: (projectId: number) => postLike(projectId),
    onMutate: () => {
      const prevProject = queryClient.getQueryData(['projectData']);

      const nextProject = {
        ...(prevProject || {}),
        isLoved: !isLoved,
        loveCount: loveCount + 1,
      };
      console.log('prev', prevProject, 'next', nextProject);

      // ['projectData'] 키에 저장된 쿼리 데이터를 nextProject 갈아끼운다.
      queryClient.setQueryData(['projectData'], nextProject);

      return { prevProject };
    },

    onError: (err, context) => {
      queryClient.setQueryData(['projectData'], context);
      console.log(err);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (projectId: number) => deleteLike(projectId),
    onMutate: () => {
      const prevProject = queryClient.getQueryData(['projectData']);

      const nextProject = {
        ...(prevProject || {}),
        isLoved: !isLoved,
        loveCount: loveCount - 1,
      };

      // ['projectData'] 키에 저장된 쿼리 데이터를 nextProject 갈아끼운다.
      queryClient.setQueryData(['projectData'], nextProject);

      return { prevProject };
    },

    onError: (err, context) => {
      queryClient.setQueryData(['projectData'], context);
      console.log(err);
    },
  });

  const handleLikeCheck = (isLike: boolean) => {
    //isLike 값에따라 post또는 delete요청 보냄
    isLike ? postMutation.mutate(projectId) : deleteMutation.mutate(projectId);
  };

  const { nickname } = useAuthStore();
  const handleClick = () => {
    if (!nickname) {
      alert('로그인이 필요합니다.');
      return;
    }
    setIsLike(!isLike);
    handleLikeCheck(!isLike);
  };

  return (
    <div onClick={handleClick} className="flex flex-row box-sizing-border items-center ml-[0.4rem]">
      <div className="cursor-pointer m-[0_0.6rem_0_0] w-[2.5rem] h-[2.5rem]">
        {isLike ? <img src={LikeFillIcon} alt="like" /> : <img src={LikeIcon} alt="like" />}
      </div>
      <div className="inline-block break-words font-['Pretendard'] font-semibold text-[1rem] text-[#989898]">
        {loveCount}
      </div>
    </div>
  );
};
