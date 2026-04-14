import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import "./OrdersList.css";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("date", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setOrders(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "orders", id));
  };

 return (
  <div>
    <h2 style={{ padding: "20px" }}>📦 Заказы</h2>

    <div className="orders-container">
      {orders.map(order => (
        <div key={order.id} className="order-card">
          <p><strong>Имя:</strong> {order.name}</p>
          <p><strong>Товар:</strong> {order.product}</p>
          <p><strong>Цвет:</strong> {order.color}</p>
          <p><strong>Размер:</strong> {order.size}</p>

          <button
            className="delete-btn"
            onClick={() => handleDelete(order.id)}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  </div>
);
}