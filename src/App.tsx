import { Todos } from "components/Todos/Todos";
import "./App.css";
import { AddTodo } from "components/AddTodo/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
