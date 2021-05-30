import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { HomeScreen } from './screens/home/home';

export function App() {
  return (
    <div className={styles.app}>
      <HomeScreen />
    </div>
  );
}

export default App;
