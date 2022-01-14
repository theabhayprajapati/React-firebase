// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4N3fD9q4MJGK_sCIEjBoQWI_UrTGPY1g',
  authDomain: 'tclone-2b9fa.firebaseapp.com',
  projectId: 'tclone-2b9fa',
  storageBucket: 'tclone-2b9fa.appspot.com',
  messagingSenderId: '289177898695',
  appId: '1:289177898695:web:0a1606b779cf62a2a238e2',
}

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()

const storage = getStorage()

export { app, db, storage }
