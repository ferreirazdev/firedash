import app from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDZWx_a656ji7LX0Lw1xKEQTT335lU4F2M",
  authDomain: "firedash-7a1dd.firebaseapp.com",
  projectId: "firedash-7a1dd",
  storageBucket: "firedash-7a1dd.appspot.com",
  messagingSenderId: "288047620071",
  appId: "1:288047620071:web:ef58fe184eb5010b91a742",
  measurementId: "G-K5P43YPZE9",
  databaseURL:'https://firedash-7a1dd-default-rtdb.firebaseio.com/'
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;



