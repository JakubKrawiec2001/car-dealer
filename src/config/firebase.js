import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: "react-cars-86570.firebaseapp.com",
	projectId: "react-cars-86570",
	databaseURL: "gs://react-cars-86570.appspot.com",
	storageBucket: "react-cars-86570.appspot.com",
	messagingSenderId: "17065497807",
	appId: "1:17065497807:web:10e79f1444538ab2cad3ba",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
