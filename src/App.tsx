import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { Form2 } from "./components/Form2";
import { RedCounter } from "./components/RedCounter";
import { TimerFather } from "./components/TimerFather";
import { User } from "./components/User";


function App() {
  return (
    <div className="App">
      <h1>Review Course: React + TS</h1>
      <hr/>
      <Counter />
      <User />
      <TimerFather />
      <RedCounter />
      <Form />
      <Form2 />
    </div>
  );
}

export default App;
