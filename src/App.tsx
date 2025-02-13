import './App.css'
import Header from './compounent/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<div>Home Page</div>} />
        </Routes>
      </Router>
    </div>
  );
};
export default App
