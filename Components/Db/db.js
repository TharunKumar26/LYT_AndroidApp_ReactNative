
import * as firebase from 'firebase'
import firestore from '@react-native-firebase/firestore';
const config = {
  apiKey: "AIzaSyCzj9-qlrbu-auN4eqUti5UI4Nby89wL9M",
  authDomain: "wasteapp-e4a71.firebaseapp.com",
  databaseURL: "https://wasteapp-e4a71-default-rtdb.firebaseio.com",
  projectId: "wasteapp-e4a71",
  storageBucket: "wasteapp-e4a71.appspot.com",
  messagingSenderId: "553358691405",
  appId: "1:553358691405:web:34e46adb5275690a896004",
  measurementId: "G-MS1GSGGF13"
};

try {
  firebase.initializeApp(config);
} catch (e) {
  console.log('App reloaded, so firebase did not re-initialize');
}

firebase.firestore().settings({ experimentalForceLongPolling: true })

export default firebase;