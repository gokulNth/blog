export function getAllArticles(db) {
  return db
    .collection('article')
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    });
}
