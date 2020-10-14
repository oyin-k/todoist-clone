import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCVRaDm_h9WriaXbQR8Eanv-P1UWq6wWg4",
  authDomain: "todoist-clone-381b5.firebaseapp.com",
  databaseURL: "https://todoist-clone-381b5.firebaseio.com",
  projectId: "todoist-clone-381b5",
  storageBucket: "todoist-clone-381b5.appspot.com",
  messagingSenderId: "291928464394",
  appId: "1:291928464394:web:b8122a8d142bf056ab13f3",
  measurementId: "G-GGMYLK12XF",
});

export { firebaseConfig as firebase };
