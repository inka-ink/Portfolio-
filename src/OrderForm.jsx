import { useState } from "react";
import { addOrder } from "./firebase";
import "./OrderForm.css";

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    product: "",
    color: "",
    size: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.product) {
      alert("Пожалуйста, заполните обязательные поля");
      return;
    }

    await addOrder({
      ...form,
      date: new Date()
    });

    alert("✅ Заказ отправлен!");

    setForm({
      name: "",
      product: "",
      color: "",
      size: ""
    });
  };

  return (
    <div className="order-container">
      <form className="order-form" onSubmit={handleSubmit}>
        <h2>🧶 Handmade Bestellung</h2>

        <input
          name="name"
          placeholder="Ваше имя"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="product"
          placeholder="Товар (шапка, свитер...)"
          value={form.product}
          onChange={handleChange}
        />

        <input
          name="color"
          placeholder="Цвет"
          value={form.color}
          onChange={handleChange}
        />

        <input
          name="size"
          placeholder="Размер"
          value={form.size}
          onChange={handleChange}
        />

        <button type="submit">Заказать</button>
      </form>
    </div>
  );
}