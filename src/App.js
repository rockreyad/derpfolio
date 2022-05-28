import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/Home";
import "./styles/tailwind.css";



function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
