// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTv9W0siLeAPQLWzElBbtF-OqFeA8Mx1I",
  authDomain: "simple-react-authenticat-11ab2.firebaseapp.com",
  projectId: "simple-react-authenticat-11ab2",
  storageBucket: "simple-react-authenticat-11ab2.appspot.com",
  messagingSenderId: "667047975021",
  appId: "1:667047975021:web:743c3e1f34344440bfc764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app