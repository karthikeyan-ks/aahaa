import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Header';
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<div>home page</div>}/>
      </Routes>
    </Router>
  )
}

export default App
