import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import Listusers from './Listusers';
import NavPro from './NavPro';

function App() {
  return (
  <div>
    <NavPro/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Listusers/>}/>
    </Routes>
    
  </div>
  );
}

export default App;
