import React from "react";
import Input from "./Input";
import "./Form.css";
function Form({
  FormData,
  title,
  setFormInput,
  FormInput,
  error,
  FormFunction,
}) {
  return (
    <div className="FormHolder">
      <div className="Form">
        <b className="FormTitle">{title}</b>
        {FormData.map((data, index) => (
          <Input data={data} key={index} setFormInput={setFormInput} />
        ))}

        <button
          className="FormButton"
          onClick={() => {
            console.log(FormFunction);
            FormFunction();
          }}
        >
          {title}
        </button>
        {error && <div className="FormError">{error}</div>}
      </div>
    </div>
  );
}

export default Form;
