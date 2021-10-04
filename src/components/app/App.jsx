import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HeroProvider from '../../hooks/HeroProvider';
import HeroDetail from '../heroes/HeroDetail';
import ListOfHeroes from '../heroes/ListOfHeroes';

export default function App() {
  return (
    <HeroProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/:id">
            <HeroDetail />
          </Route>
          <Route path="/">
            <ListOfHeroes />
          </Route>
        </Switch>
      </BrowserRouter>
    </HeroProvider>
  );
};

