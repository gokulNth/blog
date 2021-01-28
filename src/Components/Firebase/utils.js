import db from './config';
import firebase from 'firebase';

export function getAllArticles(where) {
  return where && where.length > 0
    ? db
        .collection('article')
        .where('tags', 'array-contains-any', where)
        .get()
        .then((querySnapshot) => {
          return querySnapshot.docs.map((doc) => doc.data());
        })
        .catch((err) => err)
    : db
        .collection('article')
        .get()
        .then((querySnapshot) => {
          return querySnapshot.docs.map((doc) => doc.data());
        })
        .catch((err) => err);
}

export function getTagsList() {
  return db
    .collection('tags')
    .doc('tags')
    .get()
    .then((tagsSnapshot) => tagsSnapshot.data());
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

export function likeArticle(id, like, user) {
  var docRef = db.collection('article').doc(id.toString());
  var writeRef = db.collection('Users').doc(user.email);
  if (!user.likedArticles.includes(id)) {
    docRef.set({ like: like + 1 }, { merge: true });
    writeRef.update({
      likedArticles: firebase.firestore.FieldValue.arrayUnion(id),
    });
  } else {
    docRef.set({ like: like - 1 }, { merge: true });
    writeRef.update({
      likedArticles: firebase.firestore.FieldValue.arrayRemove(id),
    });
  }
}
