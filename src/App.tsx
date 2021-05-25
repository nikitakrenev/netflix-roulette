import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path={"/"} exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
