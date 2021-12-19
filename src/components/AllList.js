import React from "react";
import { AllListItem } from "./AllListItem";

export const AllList = ({ all, handleDelete, handleToggle }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {all.map((all, index) => (
          <AllListItem
            key={all.id}
            all={all}
            index={index}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </>
  );
};
