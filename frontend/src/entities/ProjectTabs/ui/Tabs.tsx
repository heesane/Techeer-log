import { useState } from 'react';
import { Tab } from '@headlessui/react';

interface TabProps {
  // selectedType: string;
  setSelectedType: (type: string) => void;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Tabs({ setSelectedType }: TabProps) {
  const [categories] = useState(['부트캠프', '팀 프로젝트']);

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="grid w-full grid-cols-2">
          {categories.map((category) => (
            <Tab
              key={category}
              onClick={() => setSelectedType(category)}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-3 font-['Pretendard'] font-[400] text-2xl leading-5",
                  'bg-transparent focus:outline-none',
                  selected ? 'bg-[#09090B] text-[#fafafa] shadow' : 'text-[#a1a1aa] hover:text-white',
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
