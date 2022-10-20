import { ITask } from "../../App";
import { TaskItem } from "../TaskItem";
import styles from "./styles.module.css";
import Clipboard from "../../assets/Clipboard.png";

interface TasksProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onChecked: (id: string) => void;
}
export function Tasks({ tasks, onDeleteTask, onChecked }: TasksProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isChecked).length;
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.taskTotalCount}>
          <strong>Tarefas criadas</strong>
          <span>{totalTasks}</span>
        </div>
        <div className={styles.taskCompletedCount}>
          <strong>Concluídas</strong>
          <span>
            {completedTasks} de {totalTasks}
          </span>
        </div>
      </header>
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onChecked={onChecked}
          />
        ))}
        {tasks.length <= 0 && (
          <section className={styles.listEmpty}>
            <img src={Clipboard} alt="imagem de lista vazía" />
            <p>Você ainda não tem tarefas cadastradas </p>
            <p> Crie tarefas e organize seus itens a fazer</p>
          </section>
        )}
      </div>
    </section>
  );
}
