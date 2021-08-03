import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCm0snxD-oEteOubyZd3dEpvATMLfu8bb0",
  authDomain: "scratch-card-b928c.firebaseapp.com",
  projectId: "scratch-card-b928c",
  storageBucket: "scratch-card-b928c.appspot.com",
  messagingSenderId: "524059389878",
  appId: "1:524059389878:web:ff2cb309dae2f278c29b17",
  measurementId: "G-W1VJPZE23B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
