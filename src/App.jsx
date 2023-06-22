import React, { useState } from "react";
import uuid from "react-uuid";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      plan: "react",
      context: "redux",
      isDone: false,
    },
  ]);

  return (
    <div>
      <nav>
        <h1 style={{ backgroundColor: "#212020", padding: "10px" }}>
          Terry TodoList🧸
        </h1>
      </nav>
      <main style={{ backgroundColor: "#545352", padding: "10px" }}>
        <Input todos={todos} setTodos={setTodos} />
        <div>
          <TodoList todos={todos} setTodos={setTodos} isListDone={false} />
          <TodoList todos={todos} setTodos={setTodos} isListDone={true} />
        </div>
      </main>
      <footer style={{ backgroundColor: "#212020", padding: "10px" }}>
        Terry TodoList 🍫
      </footer>
    </div>
  );
}

export default App;
