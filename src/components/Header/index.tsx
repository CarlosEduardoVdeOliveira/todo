import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Logo } from "../Logo";
import styles from "./styles.module.css";

interface HeaderProps {
  onAddTask: (content: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [content, setContent] = useState("");
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(content);
    setContent("");
  }
  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }
  return (
    <header>
      <div className={styles.header}>
        <Logo />
      </div>
      <form onSubmit={handleSubmit} className={styles.contentForm}>
        <input
          type="text"
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeContent}
          value={content}
        />
        <button type="submit" className={styles.button}>
          Criar <PlusCircle size={16} />
        </button>
      </form>
    </header>
  );
}
