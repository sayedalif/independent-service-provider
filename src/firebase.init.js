// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDuUhTBAB1D6loH8WT6p1bM38Ee5dX5Ubs',
  authDomain: 'wild-life-photography-52740.firebaseapp.com',
  projectId: 'wild-life-photography-52740',
  storageBucket: 'wild-life-photography-52740.appspot.com',
  messagingSenderId: '431043543969',
  appId: '1:431043543969:web:d3ae87c1c99c6036b141e0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
