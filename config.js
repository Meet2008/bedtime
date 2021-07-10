import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1ftK1b_UxdK--fnCTGLGp7HKHNtNLqT8",
  authDomain: "bed-time-stories-2386e.firebaseapp.com",
  databaseURL: "https://bed-time-stories-2386e-default-rtdb.firebaseio.com",
  projectId: "bed-time-stories-2386e",
  storageBucket: "bed-time-stories-2386e.appspot.com",
  messagingSenderId: "1020379775533",
  appId: "1:1020379775533:web:fc53028074a970ed942ea4",
  measurementId: "G-VPR01JB2VQ"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

  export default firebase.firestore();


