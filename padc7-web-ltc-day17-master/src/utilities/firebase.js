import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCqYEXOZVtgK6SQFbXj4-QlVh9ZGPUSUlA",
    authDomain: "myproject-9e503.firebaseapp.com",
    databaseURL: "https://myproject-9e503.firebaseio.com",
    projectId: "myproject-9e503",
    storageBucket: "myproject-9e503.appspot.com",
    messagingSenderId: "104009263767"
  };
  firebase.initializeApp(config);
  export default firebase.firestore();