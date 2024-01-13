// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: 'AIzaSyBF7OPRyiXXt3nKHRkPIWPyWoBSg1UL8_Q',
	authDomain: 'michew-s-project.firebaseapp.com',
	projectId: 'michew-s-project',
	storageBucket: 'michew-s-project.appspot.com',
	messagingSenderId: '547632966787',
	appId: '1:547632966787:web:b4357a55a90d64c3a6bfb6',
	measurementId: 'G-F9F9H6KRVC',
};

// Initialize Firebase

let firebase_app =
	getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const analytics = isSupported().then((yes) =>
	yes ? getAnalytics(firebase_app) : null
);

export default firebase_app;
