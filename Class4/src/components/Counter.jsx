import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h2>Counter</h2>
            <div className="counter-box">
                <button onClick={() => setCount(count + 1)}>+</button>

                <span>{count}</span>

                <button onClick={() => setCount(count - 1)}>-</button>

            </div>

            <button className="reset-btn" onClick={() => setCount(0)}>
                Reset
            </button>


        </div>
    );
};

export default Counter;