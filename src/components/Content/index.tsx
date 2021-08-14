import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal, { useModal } from '../Modal';

const Content = (): JSX.Element => {
  const {
    isShowing,
    toggle,
    isShowing: secondShowing,
    toggle: secondToggle,
  } = useModal();

  return (
    <main>
      <Switch>
        <Route exact path="/">
          this is the regular home route hi.
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
        </Route>
        <Route path="/apps/soft-drinks">SOFT DRINKS ARE dElIcIoUs</Route>
        <Route path="/apps/hard-drinks">boozy woozy i think</Route>
        <Route path="/apps/hot-dogs">hotty hotty hhotty dog</Route>
        <Route path="/apps/hamburgers">hAMBOOOORG!</Route>
      </Switch>

      <Modal isShowing={isShowing} hide={toggle}>
        <div>hey this is the modal content</div>
      </Modal>
      <Modal isShowing={secondShowing} hide={secondToggle}>
        <div>hey this is SECOND ONE the modal content</div>
      </Modal>
    </main>
  );
};

export default Content;
