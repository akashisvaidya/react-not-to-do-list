import React from "react";

export const Form = () => {
  const handleOnSubmit = (e) => {};

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="row mt-3 g-2">
          <div className="col-md-7">
            <input
              name="task"
              type="text"
              className="form-control"
              placeholder="Task Name"
              required
            />
          </div>
          <div className="col-md-2">
            <input
              name="hr"
              type="number"
              className="form-control"
              min="1"
              placeholder="Hour Spent"
              required
            />
          </div>
          <div className="col-md-3 d-grid gap-2">
            <button className="btn btn-primary">
              <i className="fa-solid fa-plus"></i> New Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
