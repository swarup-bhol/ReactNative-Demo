import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'oQSdmajXRljF9mq1KWvGhgMML01ZLRMkLTd112AX',
    authDomain: 'awesomeproject-e3a08.firebaseapp.com',
    databaseURL: 'https://console.firebase.google.com/project/awesomeproject-e3a08/firestore/data/~2F',
    projectId: 'awesomeproject-e3a08',
    storageBucket: 'awesomeproject-e3a08.appspot.com',
    messagingSenderId: '606990125895',
    appId: '1:606990125895:android:660fad5fe0a5368de49a62',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

    console.log(firebase)
}

export { firebase };