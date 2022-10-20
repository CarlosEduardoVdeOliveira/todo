import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";

export interface ITask {
  id: string;
  content: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  function addTask(content: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: content,
        isChecked: false,
      },
    ]);
  }
  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }
  function checkedIsCompletedTask(id: string) {
    const checked = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });
    setTasks(checked);
  }
  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onChecked={checkedIsCompletedTask}
      />
    </div>
  );
}

export default App;
