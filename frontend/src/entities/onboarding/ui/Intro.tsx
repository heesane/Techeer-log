// import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  // const techRef = useRef<HTMLDivElement>(null);
  // const topTechRef = useRef<HTMLDivElement>(null);
  // const bottomTechRef = useRef<HTMLDivElement>(null);

  // const [middleVisible, setMiddleVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('show');
  //           setTimeout(() => {
  //             setMiddleVisible(true);
  //           }, 1000); // 가운데 텍스트가 완전히 나타난 후 1초 후에 위아래 텍스트 등장
  //         } else {
  //           entry.target.classList.remove('show');
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5, // 문구가 반쯤 보일 때부터 효과 시작
  //     },
  //   );

  //   if (techRef.current) {
  //     observer.observe(techRef.current);
  //   }

  //   if (topTechRef.current) {
  //     observer.observe(topTechRef.current);
  //   }

  //   if (bottomTechRef.current) {
  //     observer.observe(bottomTechRef.current);
  //   }

  //   return () => {
  //     if (techRef.current) observer.unobserve(techRef.current);
  //     if (topTechRef.current) observer.unobserve(topTechRef.current);
  //     if (bottomTechRef.current) observer.unobserve(bottomTechRef.current);
  //   };
  // }, []);

  return (
    <div className="py-[20rem]">
      {/* 테커 소개*/}
      <div className="w-[100vw] h-[200vh] flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          <div className="flex text-white font-['Pretendard-Bold'] text-[6rem]">Technology</div>
        </motion.div>
        <div className="flex text-white font-['Pretendard-Bold'] text-[6rem] opacity-0">Career</div>
      </div>
      {/*   */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
      >
        <div className="flex w-[100vw] px-20">
          <div
            className="flex font-['Pretendard-Bold'] text-[6rem] bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #E4EDFF, #0047FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tech
          </div>
          <div className="flex text-white font-['Pretendard-Bold'] text-[6rem]">nology</div>
        </div>
        <div className="flex w-[100vw] px-20 text-white font-['Pretendard-Medium'] text-[1.5rem]">
          실리콘밸리에서 직접 운영하는 개발기술과 실전 코딩
        </div>
      </motion.div>
      <div className="flex justify-center my-[7rem]">
        <img src="src/entities/onboarding/image/animation.gif" alt="" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.3,
        }}
      >
        <div className="flex justify-end w-[100vw] px-20">
          <div className="flex text-white font-['Pretendard-Bold'] text-[6rem]">Car</div>
          <div
            className="flex font-['Pretendard-Bold'] text-[6rem]"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #E4EDFF, #0047FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            eer
          </div>
        </div>
        <div className="flex justify-end w-[100vw] px-20 text-white font-['Pretendard-Medium'] text-[1.5rem]">
          테커 SW부트캠프에서 시작하여 팀 활동과 인턴쉽을 거쳐 전문 개발자로 성장
        </div>
      </motion.div>
    </div>
  );
}
