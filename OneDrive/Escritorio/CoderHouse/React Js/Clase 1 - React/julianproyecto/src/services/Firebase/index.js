import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDEhdzB_QNx-CowhwyrsF1qv7qZ0Wi7s54",
  authDomain: "backendreactcoder-01.firebaseapp.com",
  projectId: "backendreactcoder-01",
  storageBucket: "backendreactcoder-01.appspot.com",
  messagingSenderId: "239739781655",
  appId: "1:239739781655:web:be1879840d6c4a7056d252"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);