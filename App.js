import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import F1 from './Components/File1';
import Books from './Components/Books';
import Buyed from './Components/Buyed';
import Press1 from "./Components/Press";
import Myacc from "./Components/Myacc";
import About from "./Components/About";
import Appone from './Components/Maincart';

function App() {


  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route index element={<F1 />} />
    <Route path='/F1' element={<F1 />}></Route>
    <Route path='/Books' element={<Books />}></Route>
    <Route path='/Buyed' element={<Buyed />}> </Route>
    <Route path='/Press1' element={<Press1/>}> </Route>
    <Route path='/Myacc' element={<Myacc />}></Route>
    <Route path='/About' element={<About />}></Route>
    <Route path='/Appone' element={<Appone />}></Route>
   

  </Routes>
  </BrowserRouter>
  
  </>
     );
}

export default App;
