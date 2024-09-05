import NavBar from '../shared/ui/NavBar.tsx';
import { Search } from '../entities/search';
// import { EmblaOptionsType } from 'embla-carousel';
import { useEffect, useRef, useState } from 'react';
import Footer from '../shared/ui/Footer.tsx';
import { useLocation } from 'react-router-dom';
import Intro from '../entities/onboarding/ui/Intro.tsx';
import Bootcamp from '../entities/onboarding/ui/Bootcamp.tsx';
import Project from '../entities/onboarding/ui/Project.tsx';
import circle1 from '../entities/onboarding/image/circle1.png';
import circle2 from '../entities/onboarding/image/circle2.png';
import { motion } from 'framer-motion';

export default function MainPage() {
  const [result, setResult] = useState<any>([]);
  console.log(result);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (searchQuery) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchQuery]);

  // const data: prizeDate = {
  //   projectTypeEnum: 'BOOTCAMP',
  //   year: 2024,
  //   semesterEnum: 'SECOND',
  // };
  // function renameSemester(semester: string) {
  //   if (semester === 'FIRST') return '동계';
  //   if (semester === 'SECOND') return '하계';
  //   else return '';
  // }
  const interBubble = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble.current) {
        interBubble.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#111111] flex flex-col w-screen justify-center items-center">
      <NavBar scrollRef={scrollRef} />
      {/* 메인페이지-소개 */}
      <div className="w-[100vw] h-[41.6vw] flex justify-center items-center gradient-bg">
        <div className="gradients-container absolute inset-0">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div ref={interBubble} className="interactive"></div>
        </div>
        <div className="w-[100vw] h-[100vw] flex flex-col justify-center items-center font-['Pretendard-Regular'] font-normal text-[#FFFFFF]">
          <span className="font-['Pretendard-Black'] text-[6rem] m-[0_0_1.5rem_0]">TECHEER</span>
          <span className="font-['Pretendard-Thin'] text-[1.875rem]">
            테커에서 진행하는 <a className="font-['Pretendard-Medium']">다양한 프로젝트를 한눈에</a>
          </span>
          <Search setResult={setResult} nowRef={scrollRef} />
        </div>
      </div>
      <Intro />
      {/* 부트캠프 소개*/}
      <Bootcamp />
      {/* 프로젝트 소개*/}
      <Project />
      {/* 테커 */}
      <div className="w-[100vw] h-[100w] flex flex-col relative">
        <motion.div
          initial={{ opacity: 0, x: -30, y: -30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 1.5,
          }}
        >
          <img className="w-[25rem] h-[36rem] flex" src={circle1} alt="원" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          <div className="flex flex-col items-center justify-center mb-[20rem]">
            <span className="font-['Pretendard-Medium'] text-white text-[2rem]">실리콘밸리 성장 코딩스쿨 </span>
            <span
              className="font-['Pre-S'] text-white text-[11rem]"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #E4EDFF, #0047FF',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Techeer
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 0.2,
          }}
        >
          <img className="w-[35rem] h-[43rem] flex -right-0 bottom-0 absolute" src={circle2} alt="원" />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
