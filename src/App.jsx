import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleAdd = () => {
    const text = inputRef.current.value;
    if (text) {
      const addItem = {
        completed: false,
        value: text,
      };
      setTodos([...todos, addItem]);
      inputRef.current.value = "";
    }
  };
  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const handleDelete = () => {
    setTodos([])
  }
  return (
    <>
      <div className="bg-blue-400 bg-opacity-20 absolute left-1/2 top-1/2 flex w-11/12 -translate-x-1/2 -translate-y-1/2  flex-col rounded-lg border-2 border-blue-500 p-5 md:w-96">
        <h1 class="mb-4 bg-gradient-to-r from-indigo-200 to-blue-500 bg-clip-text text-center text-3xl font-medium text-transparent sm:text-5xl">
          Todo List
        </h1>
        <h1></h1>
        <ul className="mt-3 min-h-56 cursor-pointer list-['👍'] flex-wrap justify-between md:min-h-48">
          {todos.map(({ completed, value }, index) => (
            <div className=" mb-2 flex h-10 w-full items-center">
              <li
                key={index}
                onClick={() => handleItemDone(index)}
                className={
                  "mx-10 mb-2  w-9/12" + (completed ? " line-through" : "")
                }
              >
                {value}
              </li>
              <span
                onClick={() => handleDeleteItem(index)}
                className="text-4xl font-bold uppercase text-blue-500"
              >
                x
              </span>
            </div>
          ))}
        </ul>
        <input
          ref={inputRef}
          type="text"
          name="text"
          placeholder="Please Enter Your Item"
          className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <div className="flex justify-between">
          {" "}
          <button
            onClick={handleAdd}
            className=" mt-3 inline-block justify-center rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          >
            Add
          </button>
          <button
            onClick={handleDelete}
            className=" mt-3 inline-block justify-center rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
