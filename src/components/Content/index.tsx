import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Content = (): JSX.Element => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          Get out of your car and come on in!@#@#!!!!
        </Route>
        <Route path="/spa/soft-drinks">SOFT DRINKS ARE dElIcIoUs</Route>
        <Route path="/spa/hard-drinks">boozy woozy i think</Route>
        <Route path="/spa/hot-dogs">hotty hotty hhotty dog</Route>
        <Route path="/spa/hamburgers">hAMBOOOORG!</Route>
      </Switch>
    </main>
  );
};

export default Content;
