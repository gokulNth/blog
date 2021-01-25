import db from './config';
import firebase from 'firebase';

export function getAllArticles() {
  return db
    .collection('article')
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    });
}

export function signIn(firebase) {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
}

export function addUserIfNeeded(name, email) {
  return db
    .collection('Users')
    .doc(email)
    .get()
    .then(
      (user) =>
        !user.exists && db.collection('Users').doc(email).set({ email, name })
    );
}

export function signOut(firebase) {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert('signOut Successfully');
    })
    .catch((error) => {
      alert('signOut Failed');
    });
}

export function likeArticle(id, like, email) {
  var docRef = db.collection('article').doc(id.toString());
  var writeRef = db.collection('Users').doc(email);
  writeRef
    .get()
    .then((doc) => doc.data())
    .then((data) => {
      if (!data.likedArticles.includes(id)) {
        docRef.set({ like: like + 1 }, { merge: true });
        writeRef.update({
          likedArticles: firebase.firestore.FieldValue.arrayUnion(id),
        });
      } else {
        alert('You already liked this article');
      }
    });
}
