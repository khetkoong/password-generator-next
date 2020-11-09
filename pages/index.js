import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";

const index = () => {
  const makeId = (length, symbol) => {
    var result = "";
    let characters;
    if (symbol) {
      characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    } else {
      characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [symbol, setSymbol] = useState(false);
  const [randomPassword, setRandomPassword] = useState("");
  const [length, setLength] = useState(10);

  const onGenerate = () => {
    setIsCopy(false)
    setRandomPassword(makeId(length, symbol));
  };

  const onChangePasswordLength = (e) => {
    if (e.target.value > 20) {
      setLength(20);
    } else {
      setLength(e.target.value);
    }
  };

  const onIsSymbol = (checked) => {
    console.log("checked: ", checked);
    checked ? setSymbol(true) : setSymbol(false);
  };

  const [isCopy, setIsCopy] = useState(false);

  const onCopy = () => {
    setIsCopy(true);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <h1>Password Generator App</h1>
        <label>Password: </label>
        <input
          disabled
          style={{ marginBottom: "0.5rem" }}
          value={randomPassword}
          placeholder="password"
        />{" "}
        <CopyToClipboard text={randomPassword}>
          <button
            disabled={randomPassword.length < 1 ? true : false}
            onClick={onCopy}
          >
            Copy
          </button>
        </CopyToClipboard>
        {isCopy ? (
          <label style={{ color: "red" }}> Copied</label>
        ) : (
          ""
        )}
        <br />
        <label>Password Length: </label>
        <input
          style={{ marginBottom: "0.5rem" }}
          min="1"
          max="100"
          type="number"
          placeholder="1-20"
          value={length}
          onChange={(e) => onChangePasswordLength(e)}
        />
        <br />
        <label>Include Symbol: </label>
        <input
          style={{ marginBottom: "0.5rem" }}
          onChange={(e) => onIsSymbol(e.target.checked)}
          type="checkbox"
          name="isIncludeSymbol"
          // value='isIncludeSymbol'
        />
        <br />
        <br />
        <button onClick={onGenerate}>Generate</button>
      </div>
    </div>
  );
};

export default React.memo(index);
