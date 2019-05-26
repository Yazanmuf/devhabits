import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
// import 'firebase/auth';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'

// reducers
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyAjdOScsaHGOLafs8gJXXtsCG9OH-C3Jbs",
    authDomain: "dev-habits-8e344.firebaseapp.com",
    databaseURL: "https://dev-habits-8e344.firebaseio.com",
    projectId: "dev-habits-8e344",
    storageBucket: "dev-habits-8e344.appspot.com",
    messagingSenderId: "1007992464313",
    appId: "1:1007992464313:web:c11fd7d20b2c72e4"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init the firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
})

const initialState = {};

//Create our Store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;


