import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { getFilteredTodoData } from '../../api/getFilteredTodoData.ts';
import { Todo, TodoInfo } from '../../helpers/types.ts';
import { Task } from '../Task/Task.tsx';

export const TasksContainer = () => {
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [statuses, setStatuses] = useState<TodoInfo>();

  useEffect(() => {
    getFilteredTodoData(filter).then((response) => {
      setTodos(response.data);
    });
  }, [filter]);

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="radio-all">
          Все({statuses?.all})
          <input
            name="radio-all"
            id="radio-all"
            type="radio"
            value="all"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="radio-inWork">
          в работе({statuses?.inWork})
          <input
            name="radio-inWork"
            id="radio-inWork"
            type="radio"
            value="inWork"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="radio-completed">
          сделано({statuses?.completed})
          <input
            name="radio-completed"
            id="radio-completed"
            type="radio"
            value="completed"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <Task task={todo} />
        ))}
      </div>
    </div>
  );
};
