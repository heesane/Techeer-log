import { SetStateAction } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

type DropDownProps = {
  selectedType: string;
  setSelectedType: React.Dispatch<SetStateAction<string>>;
  selectedYear: string;
  setSelectedYear: React.Dispatch<SetStateAction<string>>;
  selectedPeriod: string;
  setSelectedPeriod: React.Dispatch<SetStateAction<string>>;
};
type DropdownMenuProps = {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<SetStateAction<string>>;
};

export function DropDown({
  selectedType,
  selectedYear,
  setSelectedYear,
  selectedPeriod,
  setSelectedPeriod,
}: DropDownProps) {
  // const firstDropdown = ['전체', '부트캠프', '팀 프로젝트', '개인 프로젝트'];
  const secondDropdown = ['전체', '2022', '2023', '2024'];
  const bootCampDropdown = ['전체', '동계', '하계'];

  return (
    <div className="space-x-4 flex justify-center">
      <DropdownMenu options={secondDropdown} selectedOption={selectedYear} setSelectedOption={setSelectedYear} />
      {selectedType === '부트캠프' ? (
        <DropdownMenu
          options={bootCampDropdown}
          selectedOption={selectedPeriod}
          setSelectedOption={setSelectedPeriod}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

function DropdownMenu({ options, selectedOption, setSelectedOption }: DropdownMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left font-['Pretendard'] font-[400]">
      <div>
        <Menu.Button className="w-[9rem] inline-flex justify-between rounded-xl bg-[#cccccc15] px-4 py-3 text-[1rem] text-[#cccccc] shadow-sm hover:bg-[#242628] hover:text-[#cccccc]">
          {selectedOption}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 15"
            strokeWidth="1.6"
            stroke="currentColor"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-[9rem] absolute right-0 z-10 mt-2 origin-top-right rounded-xl bg-[#222222] shadow-lg ring-1 ring-[#444444] focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    onClick={() => setSelectedOption(option)}
                    className={`${
                      active ? 'bg-[#3d3d3d] rounded-lg text-[#cccccc]' : 'text-[#888888]'
                    } block w-full px-4 py-2 text-left text-[1rem]`}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
