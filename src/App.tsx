import './App.css'
import Header from './compounent/header';
import AboutSection from './pages/AboutSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router> 
    <div className="App">
      <Routes>
      <Route path="/" element={<AboutSection />} />
      </Routes>
      </div>
    </Router>
  );
};
export default App
