import React, { useState, useRef } from "react";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Input from "./components/Input";
import Button from "./components/Button";
import {
  handleAdd,
  handleItemDone,
  handleDeleteItem,
  handleDelete,
} from "./Handlers";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  return (
    <div className="absolute left-1/2 top-1/2 flex w-11/12 -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg  border-2 border-blue-500 bg-blue-400 bg-opacity-20 p-5 md:w-96">
      <Header />
      <ul className="mt-3 min-h-56 cursor-pointer list-['👍'] flex-wrap justify-between md:min-h-48">
        {todos.map(({ completed, value }, index) => (
          <ListItem
            key={index}
            completed={completed}
            value={value}
            onClick={() => handleItemDone(todos, setTodos)(index)}
            onDelete={() => handleDeleteItem(todos, setTodos)(index)}
          />
        ))}
      </ul>
      <Input inputRef={inputRef} />
      <div className="flex justify-between">
        <Button onClick={handleAdd(todos, setTodos, inputRef)} text="Add" />
        <Button onClick={handleDelete(setTodos)} text="Delete" />
      </div>
    </div>
  );
}
export default App;
