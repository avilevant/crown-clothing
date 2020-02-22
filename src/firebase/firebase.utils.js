import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCbnQwnEp7-I-1mGdAq7qzI-GDg9V_WDR0",
    authDomain: "crown-store-2acdb.firebaseapp.com",
    databaseURL: "https://crown-store-2acdb.firebaseio.com",
    projectId: "crown-store-2acdb",
    storageBucket: "crown-store-2acdb.appspot.com",
    messagingSenderId: "1040329774452",
    appId: "1:1040329774452:web:f2b340aa3d636fecf5c821",
    measurementId: "G-9E9YPDV7G0"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;



    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }

    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;