import styles from './styles.module.scss';
import { addToDo } from '../../api/api_urls.ts';

export const AddTask = () => {
  return (
    <div className={styles.container}>
      <form action={addToDo.url} method={addToDo.method}>
        <input
          type="text"
          placeholder="Task To Be Done..."
          name="todo"
          id="todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
