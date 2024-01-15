import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/FirebaseContext";

const Cards = (props) => {
  const [url, setURL] = useState(null);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((image) => setURL(image));
  });
  return (
    <div>
      <Card style={{ width: "18rem", margin: "25px" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            This book has a title {props.name} and this book is sold by{" "}
            {props.displayName} and this book costs Rs.{props.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
