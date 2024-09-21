import { Link } from 'react-router-dom';
import arrow from '../image/arrow.png';
import folder from '../image/folder.png';
import { motion } from 'framer-motion';

export default function Project() {
  const images1: string[] = [
    '../../../../src/entities/onboarding/image/img1.png',
    '../../../../src/entities/onboarding/image/img2.png',
    '../../../../src/entities/onboarding/image/img3.png',
    '../../../../src/entities/onboarding/image/img4.png',
    '../../../../src/entities/onboarding/image/img1.png',
    '../../../../src/entities/onboarding/image/img2.png',
  ];

  const images2: string[] = [
    '../../../../src/entities/onboarding/image/img5.png',
    '../../../../src/entities/onboarding/image/img6.png',
    '../../../../src/entities/onboarding/image/img7.png',
    '../../../../src/entities/onboarding/image/img8.png',
    '../../../../src/entities/onboarding/image/img5.png',
    '../../../../src/entities/onboarding/image/img6.png',
  ];

  return (
    <div className="w-[100vw] h-[100vw] flex flex-col mt-[40rem] my-[10rem] items-center text-white">
      {/* 텍스트 */}
      <div className="w-[100vw] h-[100vw] my-[10rem] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          <div className="flex justify-center pt-[4rem] pb-[1rem]">
            <div className="font-['Pre-S'] text-[3rem] text-white">테커에서 진행한&nbsp;</div>
            <div
              className="font-['Pre-S'] text-[3rem] bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #E4EDFF, #0047FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              프로젝트&nbsp;
            </div>
            <div className="font-['Pre-S'] text-[3rem] text-white"> 모아보기</div>
          </div>
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
          <div className="flex justify-center mb-[2rem] font-['Pretendard-Medium'] text-[1.1rem]">
            개인 프로젝트부터 팀 프로젝트까지 모든 프로젝트가 여기에
          </div>
        </motion.div>
        <motion.div
          className="mx-auto mb-[3rem] rounded-[3rem] border-solid border-[1px] border-black shadow-[0_35px_60px_-15px_rgba(146, 146, 146, 0.3)]"
          style={{
            boxShadow: '0px 4px 4px -2px rgba(146, 146, 146, 0.49)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 0.5,
          }}
        >
          <Link to="/project">
            <div className="flex w-[11rem] h-[3rem] justify-center items-center gap-[1rem]">
              <span className="font-['Pretendard-Medium'] text-[1.3rem] text-white">보러가기</span>
              <img className="w-[2rem] h-[2rem] flex" src={arrow} alt="버튼" />
            </div>
          </Link>
        </motion.div>
        <div className="w-[100vw] h-full flex flex-col bg-cover bg-[url('./entities/onboarding/image/gradientbg.png')]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: 'easeInOut',
              duration: 0.7,
              delay: 0.4,
            }}
          >
            <img className="w-[80rem] h-[25rem] flex mx-auto mt-[3rem] bg-clip-content" src={folder} alt="" />
          </motion.div>
          {/** 캐러셀 */}
          <div className="w-[100vw] h-[20rem] flex flex-col mt-[10rem] items-center gap-[1rem]">
            <div className="flex py-[1rem] px-0">
              <div className="flex justify-center w-[100vw] gap-[2rem]">
                {images1.map((imageSrc, index) => (
                  <img
                    key={index}
                    className="w-[15rem] h-[10rem] rounded-[1rem] object-cover carousel1"
                    src={imageSrc}
                    alt={`image-${index}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-center w-[100vw] gap-[2rem]">
                {images2.map((imageSrc, index) => (
                  <img
                    key={index}
                    className="w-[15rem] h-[10rem] rounded-[1rem] object-cover carousel2"
                    src={imageSrc}
                    alt={`image-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
