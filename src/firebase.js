import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBL6WayfLeYk6mbnFM507vdZnaikLbgmRQ",
  authDomain: "facebook-clone-c0139.firebaseapp.com",
  databaseURL: "https://facebook-clone-c0139.firebaseio.com",
  projectId: "facebook-clone-c0139",
  storageBucket: "facebook-clone-c0139.appspot.com",
  messagingSenderId: "1006296896586",
  appId: "1:1006296896586:web:b9ca34274deb432721c2b3",
  measurementId: "G-DJZPTTGHVQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
