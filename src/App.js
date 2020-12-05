import './App.css';
import InitialComponent from './InitailComponent'
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <InitialComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
