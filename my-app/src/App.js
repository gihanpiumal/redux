import { useSelector, useDispatch } from "react-redux";
import Test from "./test";

function App() {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 50 });
  };

  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value</button>
      <br />
      <Test />
    </div>
  );
}

export default App;
