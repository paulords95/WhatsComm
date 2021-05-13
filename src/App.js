import "./App.css";
import { Button, Input } from "antd";

import React, { useState } from "react";

const { TextArea } = Input;

function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div>
        <p>
          {text.map((item) => {
            return (
              <div className="delete-div" key={item}>
                <p>{item}</p>
                <Button
                  onClick={() => {
                    const newArr = [];
                    for (let i of text) {
                      if (i !== item) {
                        newArr.push(i);
                      }
                    }
                    setText(newArr);
                  }}
                  className="delete-btn"
                  type="secondary"
                >
                  Excluir
                </Button>
              </div>
            );
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
      >
        CLICK
      </Button>
    </div>
  );
}

export default App;
