import "./app.css";
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { User } from "./components/user/User";

const App = () => {
  return (
    <div className="text-center">
      <User />
      <ControlPanel />
      <div className="circle-red"></div>
    </div>
  );
};

export default App;
