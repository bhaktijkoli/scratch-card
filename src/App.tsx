import React from "react";
import { Route, Switch } from "react-router-dom";
/* Pages */
import Login from "pages/Login/Login";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
    </Switch>
  );
};

export default App;
