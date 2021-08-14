# Modal Component + Hook

This component uses `createPortal` fuction to append the modal to the end of the body.

### Usage Example (includes using multiple modals)

```tsx
import React from 'react';
import Modal, { useModal } from '../Modal';

const ModalExample = (): JSX.Element => {
  const { isShowing, toggle } = useModal();
  const { isShowing: secondShowing, toggle: secondToggle } = useModal();

  return (
    <>
      <div
        style={{ padding: '2rem', cursor: 'pointer' }}
        onClick={toggle}
        data-openmodal
      >
        LAUNCH A MODAL?!
      </div>

      <div
        style={{ padding: '2rem', cursor: 'pointer' }}
        onClick={secondToggle}
        data-openmodal
      >
        LAUNCH A SECOND AWESOME MODAL?!
      </div>

      <Modal isShowing={isShowing} hide={toggle}>
        <div>hey this is the modal content</div>
      </Modal>
      <Modal isShowing={secondShowing} hide={secondToggle}>
        <div>hey this is SECOND ONE the modal content</div>
      </Modal>
    </>
  );
};
```
