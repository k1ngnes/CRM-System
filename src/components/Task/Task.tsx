import styles from './styles.module.scss';
import { editToDo } from '../../api/api_urls.ts';
import { Todo } from '../../helpers/types.ts';
import { useEffect } from 'react';
import { sendTodoEdit } from '../../api/sendTodoEdit.ts';

export const Task = (props: { task: Todo }) => {
  let { id, title, created, isDone } = props.task;

  useEffect(() => {
    sendTodoEdit(id, isDone, title);
  }, [isDone, title]);

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={(e) => (isDone = e.target.checked)}
      />
      <p className={styles.taskName}>{title}</p>
    </div>
  );
};
