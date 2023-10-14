import React from "react";

function Form(prop) {
  return (
    <div className="loom">
      <input type={prop.type} placeholder={prop.place} />
    </div>
  );
}

export default Form;
