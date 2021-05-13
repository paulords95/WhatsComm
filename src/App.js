import "./App.css";
import { Button, Input } from "antd";

import React, { useState } from "react";

const { TextArea } = Input;

function App() {
  const [text, setText] = useState([""]);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div>
        <p>
          {text.map((item) => {
            return <p>{item}</p>;
          })}
        </p>
      </div>
      <TextArea
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        rows={4}
      />
      <Button
        onClick={() => {
          setText((text) => [...text, input]);
          setInput("");
        }}
        type="primary"
      >
        CLICK
      </Button>
    </div>
  );
}

export default App;
