import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addOne, addTwo, reset } from "./actions";

function App() {
  const one = useSelector((state) => state.addOne);
  const two = useSelector((state) => state.addTwo);
  const state = useSelector((state) => state);
  console.log(one, two, state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>Add One:{one}</div>
      <div> Add Two: {two}</div>
      <form>
        <input
          type="button"
          value="+2"
          style={{ padding: "8px" }}
          onClick={() => dispatch(addTwo())}
        />

        <input
          type="button"
          value="+1"
          style={{ padding: "8px" }}
          onClick={() => dispatch(addOne())}
        />
        <input
          type="button"
          value="reset"
          style={{ padding: "8px" }}
          onClick={() => dispatch(reset("ADD_ONE"))}
        />
      </form>
    </div>
  );
}

export default App;
