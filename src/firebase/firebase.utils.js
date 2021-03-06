import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAe0AXb1xEDi0o5txAia5jwzKssnzVSays",
    authDomain: "crwn-db-aea2d.firebaseapp.com",
    projectId: "crwn-db-aea2d",
    storageBucket: "crwn-db-aea2d.appspot.com",
    messagingSenderId: "1090465463875",
    appId: "1:1090465463875:web:2dcc2ef3c2ee4a6b5c5ef6",
    measurementId: "G-FTZMC0QMCX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // If user is not signed in do nothing
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// trigger popup
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;