import React from "react";

export const GoodList = ({ taskListPropDrillDown, switchTaskPropDd }) => {
  console.log(taskListPropDrillDown);
  return (
    <div>
      <div className="col-md">
        <h2 className="text-center">Entry List</h2>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="task-list">
            {taskListPropDrillDown.map((item, i) => {
              console.log(item, i);
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      onclick="deleteTask({i})"
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button
                      onClick={() => switchTaskPropDd(item._id)}
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-right-long"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
