import { Fragment, SetStateAction, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import iconDropdown from '../../entities/filter/image/Icon-Dropdown.png';

type DropDownProps = {
  defaultName: string;
  selectedType: string;
  setSelectedType: React.Dispatch<SetStateAction<string>>;
};

export function UserDropDown({ defaultName, selectedType, setSelectedType }: DropDownProps) {
  const userType = ['마이페이지', '프로젝트 등록', '로그아웃'];
  const handleProjectChange = (option: SetStateAction<string>) => {
    setSelectedType(option);
  };

  return (
    <div className="flex justify-center items-center">
      <DropdownMenu
        defaultName={defaultName}
        options={userType}
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
  const [open, setOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left font-['Pretendard-Thin']">
      <div>
        <Menu.Button
          className="flex flex-row gap-4 cursor-pointer break-words font-['Pretendard'] leading-[1.5] text-[#cccccc] hover:text-[#ffffff]"
          onClick={() => setOpen(!open)}
        >
          {defaultName} 님
          <img src={iconDropdown} className="w-[0.625rem] h-[0.375rem] self-center ml-auto" alt="Dropdown Icon" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        show={open} // Control the visibility of the menu based on the open state
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="w-[9rem] absolute right-0 z-10 mt-3 origin-top-right rounded-xl border ring-1 ring-[#CCCCCC80] p-1 bg-[#11111190] shadow-lg text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setSelectedOption(option);
                      setOpen(false); // Close the menu after selection
                    }}
                    className={`${
                      active ? 'text-[#eeeeee]' : 'text-[#888888]'
                    } block w-full px-4 py-3 text-left text-[1.1rem]`}
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
