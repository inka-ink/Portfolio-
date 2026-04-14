function ProductCard({ name, image, price }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      margin: "10px",
      width: "200px",
      textAlign: "center"
    }}>
      <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{name}</h3>
      <p>Цена: {price} €</p>
    </div>
  );
}

export default ProductCard;