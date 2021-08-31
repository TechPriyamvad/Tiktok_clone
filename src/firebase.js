import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHUD8xq7tAxR3ze8-DOISWQH4DwLCqx5c",
  authDomain: "tiktokclone-10fcb.firebaseapp.com",
  projectId: "tiktokclone-10fcb",
  storageBucket: "tiktokclone-10fcb.appspot.com",
  messagingSenderId: "593053335753",
  appId: "1:593053335753:web:42282f76cdf506cfefcd18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
