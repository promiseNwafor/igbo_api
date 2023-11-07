import { getApp, initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { isProduction } from '../config';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const STAGING_FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: 'AIzaSyB31V0Eqe8FkH8GMAUWK438hpVf225BAQ4',
  authDomain: 'igbo-api-b05b1.firebaseapp.com',
  projectId: 'igbo-api-b05b1',
  storageBucket: 'igbo-api-b05b1.appspot.com',
  messagingSenderId: '555238723314',
  appId: '1:555238723314:web:f7828470a4f4a048244a6b',
  measurementId: 'G-WKR30YGKN8',
};

const PRODUCTION_FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: 'AIzaSyB31V0Eqe8FkH8GMAUWK438hpVf225BAQ4',
  authDomain: 'igbo-api-b05b1.firebaseapp.com',
  projectId: 'igbo-api-b05b1',
  storageBucket: 'igbo-api-b05b1.appspot.com',
  messagingSenderId: '555238723314',
  appId: '1:555238723314:web:f7828470a4f4a048244a6b',
  measurementId: 'G-WKR30YGKN8',
};

initializeApp(isProduction ? PRODUCTION_FIREBASE_CONFIG : STAGING_FIREBASE_CONFIG);

const functions = getFunctions(getApp());
if (!isProduction) {
  connectFunctionsEmulator(functions, 'localhost', 5005);
  console.debug('Using Functions emulator: http://localhost:5005');
}
