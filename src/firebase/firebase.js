import firebase from "firebase/app";
import expArr from '../tests/fixtures/expenses'

require('firebase/auth');
require('firebase/database');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {firebase, database as default}


// const collection = 'users';
// const expenses = [];
//
// database.ref('expenses').push(expArr[0]);
// database.ref('expenses').push(expArr[1]);
// database.ref('expenses').push(expArr[2]);
//
//
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//   })
//   .catch((e) => {
//     console.log("This failled: ", e)
//   });
//
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses)
// });
//
// const usersArray = {
//
//   [`${uuidv4()}`]: {
//     name: 'Andrew Mead',
//     age: 27,
//     isSingle: true,
//     location: {
//       city: 'Philadelphia',
//       country: 'USA'
//     }
//   },
//   [`${uuidv4()}`]: {
//     name: 'MIKE',
//     age: 24,
//     isSingle: false,
//     location: {
//       city: 'Montana',
//       country: 'USA'
//     }
//   }
// };
//
//
// database.ref(collection).set(usersArray);
// database.ref(collection).push(
//   {
//     name: 'MIKE',
//     age: 24,
//     isSingle: false,
//     location: {
//       city: 'Montana',
//       country: 'USA'
//     }
//   })
//
//
// andrewRef.set(
//   {
//     name: 'Andrew Mead',
//     age: 27,
//     isSingle: true,
//     location: {
//       city: 'Philadelphia',
//       country: 'USA'
//     }
//   })
//   .then(() => {
//     console.log('data saved')
//   })
//   .catch((e) => {
//     console.log("This failled: ", e)
//   });
//
//
// mikeRef.set(
//   {
//     name: 'MIKE',
//     age: 24,
//     isSingle: false,
//     location: {
//       city: 'Montana',
//       country: 'USA'
//     }
//   });
//
//
//
// mikeRef.update(
//   {
//     name: 'Lytvynov MIKE',
//     age: 24,
//     isSingle: false,
//     job:'software developer',
//     location: {
//       city: 'Montana',
//       country: 'USA'
//     }
//   });
//
// mikeRef.on('value',(snapshot)=>{
//   const val=snapshot.val();
//   console.log(val)
// })
//
// mikeRef.update(
//   {
//     name: 'Lytvynov Mykhaylo',
//     age: 24,
//     isSingle: false,
//     job:'software developer',
//     location: {
//       city: 'Montana',
//       country: 'USA'
//     }
//   });
//
//   mikeRef.remove().then(function() {
//   console.log("Remove succeeded.")
// })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });
//
// andrewRef.set(null).then(function() {
//   console.log("Remove succeeded.")
// })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });
//
