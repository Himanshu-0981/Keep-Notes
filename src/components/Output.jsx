import React from "react";
import "../App.css";
import { toast } from "react-toastify";

const Output = ({ data, state }) => {
  const handleDelete = (e) => {
    const filterFun = data.filter((elem, index) => e != index);
    state(filterFun);
    toast.success("data deleted");
  };

  return (
    <>
      {data.map((elem, i) => {
        return (
          <div key={i}>
            <div
              className="result-box"
              style={{ background: elem.bgColor, color: elem.textColor }}
            >
              <h3 className="result-heading">
                Name : {elem.fName + " " + elem.lName}
              </h3>
              <hr />
              <p className="result-para">{elem.msg}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(i)}>
              DELETE
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Output;
