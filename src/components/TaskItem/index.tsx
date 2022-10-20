import { Check, Trash } from "phosphor-react";
import { ITask } from "../../App";
import styles from "./styles.module.css";

interface TaskItemProps {
  task: ITask;
  onDeleteTask: (id: string) => void;
  onChecked: (id: string) => void;
}

export function TaskItem({ task, onDeleteTask, onChecked }: TaskItemProps) {
  return (
    <>
      <div className={styles.taskItem}>
        <div className={styles.content}>
          <button
            className={styles.taskCheckButton}
            onClick={() => onChecked(task.id)}
          >
            {task.isChecked ? (
              <div className={styles.taskChecked}>
                <Check size={20} />
              </div>
            ) : (
              <div className={styles.taskCheck} />
            )}
          </button>
          <p
            className={
              task.isChecked ? styles.taskCompletedText : styles.taskText
            }
          >
            {task.content}
          </p>
        </div>
        <button
          className={styles.taskDelete}
          onClick={() => onDeleteTask(task.id)}
        >
          <Trash size={20} />
        </button>
      </div>
    </>
  );
}
