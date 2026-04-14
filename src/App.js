import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./Login";
import OrderForm from "./OrderForm";
import OrdersList from "./OrdersList";

function App() {
  const [user, setUser] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(false);
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
        <h2>📦 Admin Panel</h2>

        <button
          onClick={handleLogout}
          style={{
            background: "black",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      <OrderForm />
      <OrdersList />
    </div>
  );
}

export default App;