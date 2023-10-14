import React from "react";
import Form from "./form";
import Login from "./login";
import Register from "./register";

const zoom = false;

function App() {
  return (
    <div>
      <Form type="text" place="Username" />
      <Form type="password" place="Password" />
      {zoom === true ? <Login /> : <Register />}
    </div>
  );
}
export default App;
