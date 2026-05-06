const firebaseConfig = {
  apiKey: "AIzaSyB0jn9kAdRiq8SfLuJwodD8ydrmsmX0nEw",
  authDomain: "kemaltv-e7af9.firebaseapp.com",
  projectId: "kemaltv-e7af9",
  storageBucket: "kemaltv-e7af9.firebasestorage.app",
  messagingSenderId: "582115406161",
  appId: "1:582115406161:web:b95b2baf91494286886370",
  measurementId: "G-57Q4QGHF8K",
  databaseURL: "https://kemaltv-e7af9-default-rtdb.firebaseio.com"
};

// Firebase başlatma
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
