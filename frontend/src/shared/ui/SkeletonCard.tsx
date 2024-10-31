const SkeletonCard = () => {
  return (
    <div className="h-[24rem] rounded-[0.3rem] border-solid border border-[#444444] flex flex-col box-sizing-border w-[100%] relative transform transition-transform duration-300 ease-in-out animate-pulse">
      <div className="flex justify-center items-center rounded-[0.3rem] w-[99.9%] h-[15rem] bg-[#444444]">
        <div className="bg-[#333333] w-full h-full text-white"></div>
      </div>

      <div className="flex flex-col bg-[#111111] h-[9rem] py-[1.2rem] px-2">
        <div className="bg-[#444444] w-[85%] h-[2rem] m-[0.3rem_0rem_0.4rem_1rem] inline-block self-start rounded"></div>
        <div className="bg-[#444444] w-[85%] h-[1.2rem] m-[0.2rem_0rem_0.7rem_1rem] inline-block self-start rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
