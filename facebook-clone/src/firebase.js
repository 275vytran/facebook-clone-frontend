import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBhcGwoA7t88IftKffNzENeMxggRjf3v4g",
    authDomain: "facebook-clone-4f1e1.firebaseapp.com",
    projectId: "facebook-clone-4f1e1",
    storageBucket: "facebook-clone-4f1e1.appspot.com",
    messagingSenderId: "23310130097",
    appId: "1:23310130097:web:b96c448ec3e7cd59a57b90"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
