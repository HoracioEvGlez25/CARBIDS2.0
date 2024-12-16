import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNNiBH_fbiXDSU2GvFemwTikZpBBfr1k8",
  authDomain: "carbids-7bef5.firebaseapp.com",
  projectId: "carbids-7bef5",
  storageBucket: "carbids-7bef5.firebasestorage.app",
  messagingSenderId: "798988604395",
  appId: "1:798988604395:web:648ed3320cfc4b2b3f3fae"
};

const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase); 

export const storage = getStorage(appFirebase);

export const auth = initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(AsyncStorage),
});