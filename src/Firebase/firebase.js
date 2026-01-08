import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC8mQtrRsalr1z5XGcCf-oVoCZZ6SrTTw",
  authDomain: "shop-react-53b72.firebaseapp.com",
  projectId: "shop-react-53b72",
  storageBucket: "shop-react-53b72.firebasestorage.app",
  messagingSenderId: "530541021548",
  appId: "1:530541021548:web:9f566bd8381fbc13be4b49",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
console.log("firebase config loaded", firebaseConfig.apiKey);