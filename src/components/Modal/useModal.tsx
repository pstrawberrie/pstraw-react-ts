import { useState } from 'react';

interface ModalHook {
  isShowing: boolean;
  toggle: () => void;
}

const useModal = (): ModalHook => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
