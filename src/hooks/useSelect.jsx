import { useState, useRef } from 'react';

const useSelect = () => {
  const [is_selected, toggleSelect] = useState(false);
  const ref = useRef(null);

  const handleClick = () => toggleSelect(!is_selected);

  React.useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('click', handleClick);
    }
    return () => {
      node.removeEventListener('click', handleClick);
    };
  });

  return [ref, is_selected];
};

export default useSelect;
