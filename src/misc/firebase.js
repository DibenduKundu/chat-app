import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCE_BlqiWxFbduOnTz49uigzQgtjyKnWCU',
  authDomain: 'chat-web-app-d4833.firebaseapp.com',
  projectId: 'chat-web-app-d4833',
  storageBucket: 'chat-web-app-d4833.appspot.com',
  messagingSenderId: '809829012028',
  appId: '1:809829012028:web:d105a2172fcfb98a006939',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
