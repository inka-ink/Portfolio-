function Header() {
  return (
    <header style={{ padding: "20px", textAlign: "center", backgroundColor: "#f8f8f8" }}>
      <h1>Hand Made Shop</h1>
      <nav>
        <a href="#products" style={{ margin: "0 10px" }}>Товары</a>
        <a href="#about" style={{ margin: "0 10px" }}>О себе</a>
        <a href="#contact" style={{ margin: "0 10px" }}>Контакты</a>
      </nav>
    </header>
  );
}

export default Header;