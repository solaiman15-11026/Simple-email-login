
import './App.css';
import Header from '../src/components/Header/Header'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Order from './components/Home/Order';
import RequiredAuth from './RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/order" element={<RequiredAuth>
          <Order></Order>
        </RequiredAuth>}></Route>
      </Routes>

    </div>
  );
}

export default App;
