import { FormEvent, Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Parcel from "single-spa-react/parcel";

interface Task {
  id: string;
  name: string;
}

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    addEventListener("@ds/task-adder/to/task/add", (event: CustomEvent) => {
      const task = event.detail;
      setTasks((oldTasks) => [...oldTasks, task]);
    });
  }, []);

  const onChangeInput = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    setTask(value);
  };

  const onsubmit = (event: FormEvent) => {
    event.preventDefault();
    if (task !== "") {
      setTasks((oldTasks) => [
        ...oldTasks,
        {
          id: uuidv4(),
          name: task,
        },
      ]);
      setTask("");
    }
  };

  return (
    <Fragment>
      <Parcel config={() => System.import("@ds/layout")} />

      <h1>This is Tasks</h1>

      <Parcel config={() => System.import("@ds/task-adder")} />

      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="type your task"
          onChange={onChangeInput}
          value={task}
        />
        <button>Add</button>
      </form>

      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </ul>

      {tasks.length >= 3 && <a href="/award">Finish</a>}
    </Fragment>
  );
};
