import { useParams } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const Details = () => {
  const params = useParams();
  const firebase = useFirebase();
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    firebase.getBookById(params.bookId).then((res) => setData(res.data()));
  });

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data]);
  const orderBook = async () => {
    await firebase.placeOrder(params.bookId, quantity);
  };

  if (data == null) return <h1>Loading ....</h1>;
  return (
    <>
      <div className="container mt-4">
        <h1>Book:</h1>
        <p>{data.name}</p>
        <hr />
        <div className="justify-content-center d-flex">
          <img
            src={url}
            alt="Image Loading"
            width="200px"
            height="200px"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <hr />
        <h4 className="mt-3">Details:</h4>
        <p>Price Rs {data.price}/-</p>
        <p>ISBN Number {data.isbn}</p>
        <h4>Author:</h4>
        <p>Name: {data.displayName}</p>
        <p>Email: {data.userEmail}</p>
        <h4>Enter Quantity:</h4>
        <Form.Control
          className="w-25 mb-4"
          type="number"
          onChange={(event) => setQuantity(event.target.value)}
          value={quantity}
          placeholder={quantity}
          min={quantity}
        />
        <button onClick={orderBook} className="btn btn-danger">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default Details;
