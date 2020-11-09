import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const makeId = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  console.log(watch("example")); // watch input value by passing the name of it

  const [randomPassword, setRandomPassword] = useState("");
  const [length, setLength] = useState(10);

  const onGenerate = () => {
    console.log("click generate");
    setRandomPassword(makeId(length));
  };

  const onChangePasswordLength = (e) => {
    console.log(e.target.value);
    setLength(e.target.value);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <label>Password: </label>
        <input
          disabled
          style={{ marginBottom: "0.5rem" }}
          value={randomPassword}
          placeholder="password"
        />{" "}
        <br />
        <label>Password Length: </label>
        <input
          maxLength="4"
          type="number"
          onChange={(e) => onChangePasswordLength(e)}
        />
        <br />
        <br />
        <button onClick={onGenerate}>Generate</button>
      </div>
    </div>
  );
}
