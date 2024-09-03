import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import iconDropdown from '../../entities/filter/image/Icon-Dropdown.png';
import { useAuthStore } from '../store/authStore.ts';
import { useNavigate } from 'react-router-dom';

type DropDownProps = {
  defaultName: string | null;
  // selectedMenu: string;
  // setSelectedMenu: React.Dispatch<SetStateAction<string>>;
};

export function UserDropDown({ defaultName }: DropDownProps) {
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    logout();
    window.location.replace('/');
  };

  const navigateToMyPage = () => {
    navigate('/mypage');
  };

  const navigateToProjectWrite = () => {
    navigate('/projectwrite');
  };

  const handleMenuSelect = (option: string) => {
    setSelectedMenu(option);

    switch (option) {
      case '마이페이지':
        navigateToMyPage();
        break;
      case '프로젝트 등록':
        navigateToProjectWrite();
        break;
      case '로그아웃':
        handleUserLogout();
        break;
      default:
        break;
    }
  };

  const userMenuOptions = ['마이페이지', '프로젝트 등록', '로그아웃'];

  return (
    <div className="flex justify-center items-center">
      <DropdownMenu
        defaultName={defaultName}
        options={userMenuOptions}
        selectedOption={selectedMenu}
        setSelectedOption={handleMenuSelect}
      />
    </div>
  );
}

type DropdownMenuProps = {
  defaultName: string | null;
  options: string[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
};

export function DropdownMenu({ defaultName, options, selectedOption, setSelectedOption }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left font-['Pretendard-Thin']">
      <div>
        <Menu.Button
          className={`flex flex-row gap-4 cursor-pointer break-words font-['Pretendard'] leading-[1.5] hover:text-[#ffffff] ${selectedOption === '마이페이지' ? 'text-[#FFFFFF]' : 'text-[#cccccc]'} `}
          onClick={() => setOpen(!open)}
        >
          {defaultName} 님
          <img src={iconDropdown} className="w-[0.625rem] h-[0.375rem] self-center ml-auto" alt="Dropdown Icon" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="w-[9rem] absolute right-0 z-10 mt-3 origin-top-right rounded-xl border ring-1 ring-[#CCCCCC80] p-1 bg-[#11111190] shadow-lg font-['Pretendard'] font-normal text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setSelectedOption(option);
                      setOpen(false);
                    }}
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
    </Menu>
  );
}
