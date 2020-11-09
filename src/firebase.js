import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBHSj0EtlYbagk03FjzT-IXHkjQU21vq10',
  authDomain: 'tinder-clone-63e38.firebaseapp.com',
  databaseURL: 'https://tinder-clone-63e38.firebaseio.com',
  projectId: 'tinder-clone-63e38',
  storageBucket: 'tinder-clone-63e38.appspot.com',
  messagingSenderId: '1045578312764',
  appId: '1:1045578312764:web:2dbbee70b01cbcb90d6739',
  measurementId: 'G-9ZYQ5PNPDS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
