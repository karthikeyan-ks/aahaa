import './App.css'
import Header from './compounent/header';
import AboutSection from './pages/AboutSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AboutSection />} />
        </Routes>
      </Router>
    </div>

  );
};
export default App
