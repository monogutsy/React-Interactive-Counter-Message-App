import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Counter Application</h1>

        <div className="counter-box">
          <h2 className="counter">{count}</h2>
          <p className="label">Current Count</p>
        </div>

        <div className="button-group">
          <button
            className="button"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>

          <button
            className="button"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>

          <button
            className="reset-button"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input"
          />
        </div>

        <div className="message-box">
          <p className="message-title">Live Message</p>
          <h3 className="message">
            {message || ""}
          </h3>
        </div>

        {count >= 5 && (
          <div className="goal-box">
            <h2 className="goal-text">Goal Reached!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;