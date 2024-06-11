
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import View from './components/View';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/s' element={<Signup/>}/>
      <Route path='/v' element={<View/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
