import { useParams } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";
import { useEffect, useState } from "react";

const Details = () => {
  const params = useParams();
  const firebase = useFirebase();
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getBookById(params.bookId).then((res) => setData(res.data()));
  });
  console.log(data);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data]);

  if (data == null) return <h1>Loading ....</h1>;
  return (
    <>
      <div className="container mt-4">
        <h1>Book:</h1>
        <p>{data.name}</p>
        <div className="justify-content-center d-flex">
          <img
            src={url}
            alt="Image Loading"
            width="200px"
            height="200px"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <h4 className="mt-3">Details:</h4>
        <p>Price {data.price}</p>
        <p>ISBN Number {data.isbn}</p>
        <h4>Author:</h4>
        <p>Name: {data.displayName}</p>
        <p>Email: {data.userEmail}</p>
        <button className="btn btn-danger">Buy Now</button>
      </div>
    </>
  );
};

export default Details;
