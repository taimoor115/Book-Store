import { useFirebase } from "../context/FirebaseContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ViewOrder = () => {
  const params = useParams();
  const firebase = useFirebase();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.getOrders(params.bookId).then((res) => setOrders(res.docs));
  });

  return (
    <div className="container mt-3">
      <h2>Orders</h2>
      {orders.map((order) => {
        const data = order.data();
        console.log(data);
        return (
          <div
            className="mt-4 p-3"
            style={{ border: "1px solid black" }}
            key={order.id}
          >
            <h5>Order by {data.displayName}</h5>
            <p>Quantity {data.quantity}</p>
            <p>{data.userEmail}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewOrder;
