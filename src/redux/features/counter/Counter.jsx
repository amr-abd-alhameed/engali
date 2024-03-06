import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <button aria-label="increment you" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <p>{count}</p>
      <button aria-label="decrement you" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        by amount -{" "}
        {
          <div>
            <input onChange={(e) => setAmount(e.target.value)} />
          </div>
        }
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
