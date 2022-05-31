import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div className="bg-gray-900">
        <Home />
      </div>
    </Router>
  );
}

export default App;
