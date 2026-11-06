import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { initModule1 } from "./modules/module1.js";
import { initModule2 } from "./modules/module2.js";
import { initModule3 } from "./modules/module3.js";

onAuthStateChanged(auth, (user) => {
  // Uncomment the redirect below when using live Firebase credentials:
  // if (!user) return (window.location.href = "/index.html");

  document.querySelector("#user-display").textContent = user ? user.email : "Demo Student";
  initModule1(user);
  initModule2(user);
  initModule3(user);
});

document.querySelector("#logout-btn").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "/index.html";
});