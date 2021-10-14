import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/header/Header";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Header data={data} />
      <Body data={data} />
    </div>
  );
}

export default App;
