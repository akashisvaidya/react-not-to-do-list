import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form />

        <Display />

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
