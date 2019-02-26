import { useState } from 'react';

const useToggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const res_onClick = () => setIsToggleOn(!isToggleOn);
  return [res_onClick, isToggleOn];
};

export default useToggle;
