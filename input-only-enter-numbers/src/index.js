import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [state, setState] = useState("");

  const numberChange = (e) => {
    return e.target.value
      .replace(/[０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
      })
      .replace(/[^\d]+/g, "");
  };

  return (
    <input
      type="text"
      id="input_number"
      value={state}
      onChange={(e) => setState(numberChange(e))}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
