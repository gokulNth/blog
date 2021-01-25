export function getAllArticles(db) {
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
