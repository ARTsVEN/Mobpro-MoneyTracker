import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyD_bjet6fsaqmIHp15skHS20cVaGmjN2B8',
  authDomain: 'moneytracker-bca2d.firebaseapp.com',
  databaseURL: 'https://moneytracker-bca2d-default-rtdb.firebaseio.com',
  projectId: 'moneytracker-bca2d',
  storageBucket: 'moneytracker-bca2d.appspot.com',
  messagingSenderId: '1052014762334',
  appId: '1:1052014762334:web:e72069bb04b684994e17cf',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
