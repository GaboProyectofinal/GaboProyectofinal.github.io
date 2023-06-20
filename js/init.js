/*  Inicializa Firebase con la
 * configuración del proyecto.
 * Revisa la configuración en tu
 * servidor de Firebase y cópiala
 * aquí sustituyendo los
 * asteriscos. Los campos deben
 * quedar igual que en tu
 * servidor. */
// @ts-ignore

const firebaseConfig = {
  apiKey: "AIzaSyCOIF-_v-Li3joTbdOJfvL1SwaaO71nCzA",
  authDomain: "proyectofinalbd-28a57.firebaseapp.com",
  projectId: "proyectofinalbd-28a57",
  storageBucket: "proyectofinalbd-28a57.appspot.com",
  messagingSenderId: "644950133334",
  appId: "1:644950133334:web:f71b8ffb4d269502ec89f7",
  measurementId: "G-G6202V51B2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);