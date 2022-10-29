import React from "react";

export const Badlist = () => {
  return (
    <div>
      <div className="col-md">
        <h2 className="text-center">Bad List</h2>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="bad-task"></tbody>
        </table>
        <div className="text-end fw-bold">
          You Could have saved = <span id="totalBadHr"> 0 </span>
        </div>
      </div>
    </div>
  );
};
