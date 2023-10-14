import React from "react";

const Style = { position: "relative", top: "120px" };
function Register() {
  return (
    <div>
      <input style={Style} type="password" placeholder="Confirm Password" />
      <br />
      <button>Register</button>
    </div>
  );
}

export default Register;
