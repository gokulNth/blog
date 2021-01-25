import db from './config';

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

export function getArticle(id) {
  var docRef = db.collection('article').doc(id);

  return docRef
    .get()
    .then((doc) => doc.data())
    .catch(function (error) {
      console.log('Error getting document:', error);
    });
}
