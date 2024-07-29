export const Header = () => {
  return (
    <div className="fixed top-0 w-screen flex justify-center items-center z-50 backdrop-blur-[4px]">
      <div className="flex flex-row items-center py-2 px-3 w-[1200px] box-sizing-border">
        <div className="flex flex-row justify-center my-2">
          <span
            onClick={() => window.location.replace('/bootcamp/2024')}
            className="cursor-pointer break-words font-['Bayon'] font-normal text-[2rem] text-[#EFEFEF]"
          >
            Techeer.log
          </span>
        </div>
      </div>
    </div>
  );
};
