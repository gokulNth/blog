import { apiKey, appId, domain } from '../Constants';
import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: domain + '.firebaseapp.com',
  databaseURL: 'https://' + domain + '.firebaseio.com',
  projectId: domain,
  storageBucket: domain + '.appspot.com',
  messagingSenderId: '192337838423',
  appId: appId,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
