import React, { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, id, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();

  return (
    <FormControl
      size="small"
      sx={{
        width: '27ch',
        marginRight: '2ch',
        '& .MuiInputLabel-root': {
          color: '#CCCCCC',
        },
        '& .MuiOutlinedInput-root': {
          color: '#CCCCCC',
          fontSize: 'large',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CCCCCC',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#AAAAAA',
          },
        },
      }}
      variant="outlined"
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? 'hide the password' : 'display the password'}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility sx={{ color: '#AAAAAA' }} /> : <VisibilityOff sx={{ color: '#AAAAAA' }} />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default PasswordInput;
