import React from "react";
import { useForm } from "../hooks/useForm";

export const AllAdd = ({ handleAllApp }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newAll = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAllApp(newAll);
    reset();
  };
  return (
    <>
      <h4>Add all</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="learn..."
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        ></input>
        <button
          className="btn btn-outline-primary mt-1 btn-block"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
};
