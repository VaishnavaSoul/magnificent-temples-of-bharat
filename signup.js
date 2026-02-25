import { auth, db } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword,
  sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { doc, setDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

  const signupForm = document.getElementById("signupForm");
  if (!signupForm) return;

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);

      // Create Firestore user document
      await setDoc(doc(db, "users", user.uid), {
        fullname,
        username,
        email,
        avatar: "",
        dob: "",
        introSeen: false,
        favorites: {
          temples: [],
          deity: ""
        },
        createdAt: serverTimestamp()
      });

      alert("Verification email sent! Please verify before logging in.");

      window.location.href = "verify.html";

    } catch (error) {
      alert(error.message);
    }
  });

});