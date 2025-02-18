import styles from "./app.module.css";
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { User } from "./components/user/User";

const App = () => {
  return (
    <div className={styles.app}>
      <User />
      <ControlPanel />
    </div>
  );
};

export default App;
