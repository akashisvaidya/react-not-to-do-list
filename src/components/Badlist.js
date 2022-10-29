import React from "react";

export const Badlist = ({ badListProp }) => {
  return (
    <div>
      <div className="col-md">
        <h2 className="text-center">Bad List</h2>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="bad-task">
            {badListProp.map((item, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td class="text-end">
                    <button onclick="deleteTask(${i})" class="btn btn-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button
                      onclick="markAsNotToDo(${i})"
                      class="btn btn-success"
                    >
                      <i class="fa-solid fa-right-long"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-end fw-bold">
          You Could have saved = <span id="totalBadHr"> 0 </span>
        </div>
      </div>
    </div>
  );
};
