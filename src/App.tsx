import React from "react";
import { Route, Switch } from "react-router-dom";
import firebase from "util/firebase";
import { Loading } from "components";
/* Pages */
import Login from "pages/Login/Login";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLoading(false);
    });
  }, []);
  if (loading === true) {
    return <Loading />;
  }
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
    </Switch>
  );
};

export default App;
