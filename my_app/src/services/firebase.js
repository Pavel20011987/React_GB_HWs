/* eslint-disable no-undef */
export default Chat


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFKdF5kfLZttmrf5eDhs-5x3BL8-qKUt8",
    authDomain: "lesson9-d80dd.firebaseapp.com",
    projectId: "lesson9-d80dd",
    storageBucket: "lesson9-d80dd.appspot.com",
    messagingSenderId: "1068144984627",
    appId: "1:1068144984627:web:986ddaf99ce32a4343d946"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

export const db = firebaseDB.database().ref()
export const auth = firebase.auth();