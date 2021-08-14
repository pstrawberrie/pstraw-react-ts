import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { modalStyles } from './styles';

export { default as useModal } from './useModal';

interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({
  isShowing,
  hide,
  children,
}: ModalProps): JSX.Element | null => {
  // Close on ESC key press
  const handleEscKey = useCallback(
    (event) => {
      if (event.keyCode === 27) hide();
    },
    [hide]
  );

  // Close on outside click
  const handleOutsideClick = useCallback(
    (event) => {
      const insideClick = event.target.closest(`[data-ismodal]`);
      const triggerClick = event.target.closest(`[data-openmodal]`);
      if (!insideClick && !triggerClick) hide();
    },
    [hide]
  );

  useEffect(() => {
    if (isShowing) {
      document.addEventListener('keydown', handleEscKey, false);
      document.addEventListener('click', handleOutsideClick, false);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleEscKey, handleOutsideClick, isShowing]);

  return isShowing
    ? createPortal(
        <div className={modalStyles.parent}>
          <div
            className={modalStyles.inner}
            data-ismodal
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
