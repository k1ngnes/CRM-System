import styles from './styles.module.scss';
import { AddTask } from '../../components/AddTask/AddTask.tsx';
import { TasksContainer } from '../../components/TasksContainer/TasksContainer.tsx';

export const TasksPage = () => {
  return (
    <div className={styles.container}>
      <AddTask />
      <TasksContainer />
    </div>
  );
};
