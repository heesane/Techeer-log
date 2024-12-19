import Lottie from 'react-lottie-player';
import sleeping from '../assets/image/error/sleeping.json';

const NotOpen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-black">
      <Lottie style={{ width: 300, height: 300 }} loop animationData={sleeping} play />
      <div className="flex flex-col">
        <p className="text-2xl font-bold mb-[1rem]">지금은 운영 시간이 아닙니다.</p>
        <p className="text-[1rem]">운영 시간은 11:00 ~ 03:00 입니다.</p>
      </div>
    </div>
  );
};

export default NotOpen;
