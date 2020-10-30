import * as firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA88JEvDjvWE_e3d8ggstsNHyqECwxDuSk",
  authDomain: "firegram-215c0.firebaseapp.com",
  databaseURL: "https://firegram-215c0.firebaseio.com",
  projectId: "firegram-215c0",
  storageBucket: "firegram-215c0.appspot.com",
  messagingSenderId: "1093130098772",
  appId: "1:1093130098772:web:a2a0f0c2eb1c204abd35c1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
