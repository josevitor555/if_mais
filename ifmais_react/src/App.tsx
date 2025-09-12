
// Imports CSS
import './App.css';

// Import react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// Import pages
import MainApp from './pages/MainApp';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
