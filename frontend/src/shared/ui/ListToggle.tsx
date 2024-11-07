import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import listIcon from '../../shared/assets/image/listImg/ListIcon.png';
import boxIcon from '../../shared/assets/image/listImg/BoxIcon.png';
import { ProjectToggle } from '../types/projectList';

export default function ListToggle({ alignment, setAlign }: ProjectToggle) {
  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlign(newAlignment);
  };

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="alignment">
      <ToggleButton
        sx={{
          borderColor: '#919191',
          '&.Mui-selected': {
            backgroundColor: '#6e6e6e !important',
          },
          '&:hover': {
            backgroundColor: '#474747',
          },
        }}
        value="left"
        aria-label="box aligned"
        disabled={alignment === 'left'}
      >
        <img className="h-[1rem] w-[1rem]" src={boxIcon} />
      </ToggleButton>
      <ToggleButton
        sx={{
          borderColor: '#919191',
          '&.Mui-selected': {
            backgroundColor: '#6e6e6e !important',
          },
          '&:hover': {
            backgroundColor: '#474747',
          },
        }}
        value="right"
        aria-label="list aligned"
        disabled={alignment === 'right'}
      >
        <img className="h-[1rem] w-[1rem]" src={listIcon} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
