import React from "react";

export const AllListItem = ({ all, index, handleDelete, handleToggle }) => {
  return (
    <>
      <li key={all.id} className="list-group-item">
        <p
          onClick={() => handleToggle(all.id)}
          className={`${all.done && "complete"}`}
        >
          {index + 1}.{all.desc}
        </p>
        <button className="btn btn-danger" onClick={() => handleDelete(all.id)}>
          Delete
        </button>
      </li>
    </>
  );
};
