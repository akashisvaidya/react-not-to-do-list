import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (data) => {
    console.log(data);
    setTaskList([...taskList, data]);
  };

  const switchTask = (_id) => {
    console.log(_id);
    const tempArg = taskList.map((item) => {
      if (item._id === _id) {
        item.type = "bad";
      }
      return item;
    });
    setTaskList(tempArg);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form addTask={addTask} />

        <Display taskListProp={taskList} switchTaskProps={switchTask} />

        <div className="row fw-bold">
          <div className="">
            The total hours allocated = <span id="totalHrs">0</span>Hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
