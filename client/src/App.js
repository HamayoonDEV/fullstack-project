import "./App.css";
import { getPosts } from "./actions/posts";
import { Dispatch, useEffect } from "react";

function App() {
  const dispatch = Dispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
