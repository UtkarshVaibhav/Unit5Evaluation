import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home} from './Components/Home';
import {Register} from './Components/Register';
import {Login} from './Components/Login';
import {Employees} from './Components/Employees';
import {Create} from './Components/Create';
import { Navbar } from './Components/Navbar';


function App() {
  return (

  <div className="App">
    <>
      <Navbar/>
       <Routes>
         <Route path={"/"} element={<Home/>}/>
         <Route path={"/register"} element={<Register/>}/>
         <Route path={"/login"} element={<Login/>}/>
         <Route path={"/employees"} element={<Employees/>}/>
         <Route path={"/employees/create"} element={<Create/>}/>
       </Routes>
    </>
  </div>
  );
}

export default App;
