import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import Cards from "../Components/Cards";
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
          <Cards
            link={`/book/view/${books.id}`}
            key={books.id}
            id={books.id}
            {...books.data()}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default HomePage;