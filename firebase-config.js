// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBoh_W9csbgs7krxNBNKMTkc8nCzc9M0rg",
  authDomain: "magnificent-temples.firebaseapp.com",
  projectId: "magnificent-temples",
  storageBucket: "magnificent-temples.firebasestorage.app",
  messagingSenderId: "836647714930",
  appId: "1:836647714930:web:95a6e9be9691274052c2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);