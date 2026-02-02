// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyARuziTDbRx79IUcX5xyJbm1N8fhWZdYrU",
  authDomain: "horlys-tech.firebaseapp.com",
  projectId: "horlys-tech",
  storageBucket: "horlys-tech.firebasestorage.app",
  messagingSenderId: "552965486921",
  appId: "1:552965486921:web:62950c64edcfdec0268298"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
