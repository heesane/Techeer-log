import Lottie from 'react-lottie-player';
import notFound from '../assets/image/error/notFound.json';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white bg-black">
      <Lottie style={{ width: 420, height: 240 }} loop animationData={notFound} play />
      <p className="mt-4 text-[1.5rem] font-normal">원하시는 페이지를 찾을 수 없습니다.</p>
      <button
        onClick={() => window.location.replace('/')}
        className="px-6 py-2 mt-8 text-[1rem] text-white underline transition rounded-lg underline-offset-4 hover:scale-105"
      >
        홈으로
      </button>
    </div>
  );
};

export default NotFound;
