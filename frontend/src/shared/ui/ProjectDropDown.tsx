import { Fragment, SetStateAction, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

type DropDownProps = {
  defaultName: string;
  selectedType: string;
  setSelectedType: React.Dispatch<SetStateAction<string>>;
};

export function ProjectDropDown({ defaultName, selectedType, setSelectedType }: DropDownProps) {
  const projectType = ['전체', '부트캠프', '팀 프로젝트', '개인 프로젝트'];
  const handleProjectChange = (option: SetStateAction<string>) => {
    setSelectedType(option);
  };

  return (
    <div className="flex justify-center items-center">
      <DropdownMenu
        defaultName={defaultName}
        options={projectType}
        selectedOption={selectedType}
        setSelectedOption={handleProjectChange}
      />
    </div>
  );
}

type DropdownMenuProps = {
  defaultName: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<SetStateAction<string>>;
};

export function DropdownMenu({ defaultName, options, setSelectedOption }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left font-['Pretendard-Thin']">
      <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <Menu.Button
          as="a"
          href="/your-target-page" // 클릭 시 이동할 페이지 경로
          className="flex flex-row gap-4 cursor-pointer break-words font-['Pretendard'] leading-[1.5] text-[#cccccc] hover:text-[#ffffff]"
        >
          {defaultName}
        </Menu.Button>
        <Transition
          as={Fragment}
          show={isOpen} // hover 시에만 메뉴가 보이도록 설정
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="w-[9.5rem] absolute -left-1 z-10 mt-3 origin-top-right rounded-xl border ring-1 ring-[#CCCCCC80] p-1 bg-[#11111190] shadow-lg text-white font-['Pretendard'] font-normal transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
            <div className="py-1">
              {options.map((option) => (
                <Menu.Item key={option}>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedOption(option)}
                      className={`${
                        active ? 'text-[#eeeeee]' : 'text-[#888888]'
                      } block w-full px-4 py-3 text-left text-[1rem]`}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}
