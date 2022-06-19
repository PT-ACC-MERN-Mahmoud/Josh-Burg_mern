import React, { useState } from "react";

const Form = (props) => {

  const [todoText, setTodoText] = useState("");

  const { todoList, setTodoList } = props;


  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        content: todoText,
        markedDelete: false,
        id: Math.floor(Math.random() * 100000000).toString(),
      },
    ]);
    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;