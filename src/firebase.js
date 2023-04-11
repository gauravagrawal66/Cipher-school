import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWtsIoVLYa2poFqm-CkbdLoJUVlum_154",
  authDomain: "cipher-school.firebaseapp.com",
  projectId: "cipher-school",
  storageBucket: "cipher-school.appspot.com",
  messagingSenderId: "560035212364",
  appId: "1:560035212364:web:697a1245a3dcb0ff3e98e9",
  measurementId: "G-FWNSH41NH2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
