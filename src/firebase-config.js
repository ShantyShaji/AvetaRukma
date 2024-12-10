//  // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB7kgPeza7EV0FkVcGw-r9jeoheq_0_I68",
//   authDomain: "avetarukma-60efa.firebaseapp.com",
//   projectId: "avetarukma-60efa",
//   storageBucket: "avetarukma-60efa.firebasestorage.app",
//   messagingSenderId: "19992050946",
//   appId: "1:19992050946:web:98e354f1f17d6ce51ed61b",
//   measurementId: "G-9Y21VTNRCD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7kgPeza7EV0FkVcGw-r9jeoheq_0_I68",
  authDomain: "avetarukma-60efa.firebaseapp.com",
  projectId: "avetarukma-60efa",
  storageBucket: "avetarukma-60efa.firebasestorage.app",
  messagingSenderId: "19992050946",
  appId: "1:19992050946:web:98e354f1f17d6ce51ed61b",
  measurementId: "G-9Y21VTNRCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Google Auth Provider and export it
export const provider = new GoogleAuthProvider();
