import React, { useState } from "react";
import uuid from "react-uuid";

export const Input = ({ todos, setTodos }) => {
  const [plan, setPlan] = useState("");
  const [context, setContext] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: uuid(),
            plan,
            context,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
        }}
      >
        <input
          value={plan}
          onChange={(event) => {
            setPlan(event.target.value);
          }}
        ></input>
        <input
          value={context}
          onChange={(event) => {
            setContext(event.target.value);
          }}
        />
        <button>input</button>
      </form>
    </div>
  );
};
