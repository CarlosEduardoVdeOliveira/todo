import { useEffect, useState } from "react";
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

  function setTasksSaveInLocalStorage(setNewTask: ITask[]) {
    setTasks(setNewTask);
    localStorage.setItem("todo:list", JSON.stringify(setNewTask));
  }
  function getTasksInLocalStorage() {
    const todoList = localStorage.getItem("todo:list");
    if (todoList) {
      setTasks(JSON.parse(todoList));
    }
  }
  function addTask(content: string) {
    setTasksSaveInLocalStorage([
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
    setTasksSaveInLocalStorage(newTasks);
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
    setTasksSaveInLocalStorage(checked);
  }
  useEffect(() => {
    getTasksInLocalStorage();
  }, []);
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
