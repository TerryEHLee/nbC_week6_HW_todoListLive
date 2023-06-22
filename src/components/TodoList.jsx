import React from "react";

export const TodoList = ({ todos, setTodos, isListDone }) => {
  return (
    <div>
      <h1>{isListDone ? "Done Lists" : "Working Lists"}</h1>
      {todos
        .filter((todo) => todo.isDone === isListDone)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <h3>{todo.plan}</h3>
              <p>{todo.context}</p>
              <button
                onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                {isListDone ? "Back to Work" : "Complete!"}
              </button>
              <button
                onClick={() => {
                  const deletedTodos = todos.filter((item) => {
                    return item.id !== todo.id;
                  });
                  setTodos(deletedTodos);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
