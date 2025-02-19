import styles from './styles.module.scss';
import { TasksPage } from './pages/TasksPage/TasksPage.tsx';

export const App = () => {
  return (
    <div className={styles.container}>
      <TasksPage />
    </div>
  );
};
