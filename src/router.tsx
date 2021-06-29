import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'

export const RouterGlobal: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />

      <Route />
    </BrowserRouter>
  );
}
