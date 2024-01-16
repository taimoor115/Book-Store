import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import Cards from "./Cards";
import CardGroup from "react-bootstrap/CardGroup";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  });
  console.log(books);

  return (
    <div>
      <CardGroup>
        {books.map((books) => (
          <Cards key={books.id} id={books.id} {...books.data()} />
        ))}
      </CardGroup>
    </div>
  );
};

export default HomePage;
