import { useState } from "react";
import "./App.css";
import { login } from "./api/login";
import { CheckAuth } from "./api/check-auth";
import { LogOut } from "./api/logout";

function App() {
  const [form, setForm] = useState({ username: "", email: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState<null | string>(null);

  const handleSubmit = async () => {
    const response = await login(form);
    setLoggedIn(response);
  };

  const handleCheckAuth = async () => {
    const username = await CheckAuth();
    setUsername(username);
  };

  const handleLogOut = async () => {
    const response = await LogOut();
    setLoggedIn(response);
  };

  return (
    <div className="app">
      {!loggedIn ? (
        <>
          <p>Login</p>
          <div className="content">
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <div>
          {!username
            ? "Logged In"
            : `Logged In. Extracted username '${username}' from token. `}
        </div>
      )}

      {loggedIn && (
        <>
          <button onClick={handleCheckAuth}>Check Auth</button>
          <button onClick={handleLogOut}>Log Out</button>
        </>
      )}
    </div>
  );
}

export default App;
