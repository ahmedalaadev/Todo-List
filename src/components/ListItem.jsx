import React from "react";

const ListItem = ({ completed, value, onClick, onDelete }) => {
  return (
    <div className="mb-2 flex h-10 w-full items-center">
      <li
        onClick={onClick}
        className={"mx-10 mb-2 w-9/12" + (completed ? " line-through" : "")}
      >
        {value}
      </li>
      <span
        onClick={onDelete}
        className="text-4xl font-bold uppercase text-blue-500"
      >
        x
      </span>
    </div>
  );
};

export default ListItem;
