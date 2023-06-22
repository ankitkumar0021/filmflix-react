import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCAboC3anAFtMI18sKFc9DOvtojFbraIRY",
  authDomain: "filmflix-b29df.firebaseapp.com",
  projectId: "filmflix-b29df",
  storageBucket: "filmflix-b29df.appspot.com",
  messagingSenderId: "427535930406",
  appId: "1:427535930406:web:c76856bdcdbd6e1f5fc2e7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;