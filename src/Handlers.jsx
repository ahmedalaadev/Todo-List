export const handleAdd = (todos, setTodos, inputRef) => {
  return () => {
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
};

export const handleItemDone = (todos, setTodos) => {
  return (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
};

export const handleDeleteItem = (todos, setTodos) => {
  return (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
};

export const handleDelete = (setTodos) => {
  return () => {
    setTodos([]);
  };
};
