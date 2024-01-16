import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import Cards from "../Components/Cards";

const Order = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn)
      firebase
        .fetchMyBooks(firebase.user.uid)
        .then((books) => setBooks(books.docs));
  }, [firebase]);

  if (!firebase.isLoggedIn) {
    return <h1>Loading ....</h1>;
  }

  console.log(books.docs);
  return (
    <div>
      {books.map((books) => (
        <Cards
          key={books.id}
          link={`/books/orders/${books.id}`}
          id={books.id}
          {...books.data()}
        />
      ))}
    </div>
  );
};

export default Order;
