const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <h1 className="text-6xl font-bold">404 ERROR</h1>
      <p className="mt-4 text-lg">입력하신 페이지를 찾을 수 없습니다.</p>
      <button
        onClick={() => window.location.replace('/')}
        className="px-6 py-2 mt-8 text-white underline transition rounded-lg underline-offset-4 hover:scale-105"
      >
        홈으로
      </button>
    </div>
  );
};

export default NotFound;
