import React, { useEffect, useReducer } from "react";
import { AllList } from "./components/AllList";
import { allReducer } from "./components/allReducer";
import { AllAdd } from "./components/AllAdd";
import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("all")) || []; //initial state will be returned
};
export const Reminder = () => {
  const [all, dispatch] = useReducer(allReducer, [], init);

  useEffect(() => {
    localStorage.setItem("all", JSON.stringify(all));
  }, [all]);

  const handleDelete = (allId) => {
    const action = {
      type: "delete",
      payload: allId,
    };
    dispatch(action);
  };

  const handleToggle = (allId) => {
    dispatch({
      type: "toggle",
      payload: allId,
    });
  };

  const handleAllApp = (newAll) => {
    dispatch({
      type: "add",
      payload: newAll,
    });
  };

  return (
    <div>
      <h1>Task Reminder App.</h1>
      <p>Number of tasks({all.length})</p>
      <hr />
      <div className="row">
        <div className="col-7">
          <AllList
            all={all}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <AllAdd handleAllApp={handleAllApp} />
        </div>
      </div>
    </div>
  );
};
