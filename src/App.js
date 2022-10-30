import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { useState } from "react";

const hoursPerWeek = 7 * 24;
function App() {
  const [taskList, setTaskList] = useState([]);
  const [itemToDelete, setItemToDelete] = useState([]);

  const totalHrs = taskList.reduce((subTtl, item) => subTtl + +item.hr, 0);
  const addTask = (data) => {
    if (hoursPerWeek < totalHrs + +data.hr) {
      return alert("Sorry exceeded the total hours of the week");
    }
    // console.log(data);
    setTaskList([...taskList, data]);
  };

  const switchTask = (_id, type) => {
    console.log(_id);
    const tempArg = taskList.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(tempArg);
  };

  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    // console.log(value, checked);
    checked
      ? setItemToDelete([...itemToDelete, value])
      : setItemToDelete(itemToDelete.filter((item) => item !== value));
  };
  // console.log(itemToDelete);
  const handleOnDelete = () => {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }
    setTaskList(taskList.filter((item) => !itemToDelete.includes(item._id)));
    setItemToDelete([]);

    // console.log("deleting");
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form addTask={addTask} />

        <Display
          taskListProp={taskList}
          switchTaskProps={switchTask}
          handleOnSelect={handleOnSelect}
          itemToDelete={itemToDelete}
        />

        <div className="row fw-bold">
          <div className="">
            The total hours allocated = <span>{totalHrs}</span>Hrs
          </div>
        </div>
        {itemToDelete.length > 0 && (
          <div className="d-grid g-2">
            <button onClick={handleOnDelete} className="btn btn-danger">
              Delete Selected {itemToDelete.length} Task(s)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
