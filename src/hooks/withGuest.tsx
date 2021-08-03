import * as React from "react";
import firebase from "util/firebase";

const withGuest =
  <P extends object>(Component: React.ComponentType<P>) =>
  (props: P) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser !== null) {
      window.location.href = "/";
      return null;
    }
    return <Component {...props} />;
  };

export default withGuest;
