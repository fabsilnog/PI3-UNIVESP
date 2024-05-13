import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Inicio from './inicio';
import Navbar from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
