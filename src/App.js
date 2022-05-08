import CirleLoading from "./components/circle";
import SwitchToggle from "./components/switch";
import "./sass/app.scss";

function App() {
  return (
    <div className="App">
      <SwitchToggle />
      <CirleLoading />
    </div>
  );
}

export default App;
