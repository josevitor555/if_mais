
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
import { Home } from '@/pages/Home';

const App = () => {
  return (
    <div className="app">
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:underline"
      >
        Pular para o conteúdo principal
      </a>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
