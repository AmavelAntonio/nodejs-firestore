const {initializeApp} = require('firebase/app')

const firebaseConfig = {
  apiKey: "AIzaSyBjKyloIlxDn5UBenNRdXWoHP52LkPjIBo",
  authDomain: "loni-api.firebaseapp.com",
  projectId: "loni-api",
  storageBucket: "loni-api.appspot.com",
  messagingSenderId: "450979281004",
  appId: "1:450979281004:web:02835ffce9363c602c4049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = {
    app
}