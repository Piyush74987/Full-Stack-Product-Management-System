import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FootComp } from './Components/FooterComp';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import { HeadComp } from './Components/Headercomp';
import ListProductComp from './Components/ListProductComp';
import CreateProductComp from './Components/CreateProductComp';
import UpdateProductComp from './Components/UpdateProduct';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <HeadComp></HeadComp>
      <Routes>
        <Route path='/' element={<ListProductComp/>}></Route>
        <Route path='/add-product' element={<CreateProductComp/>}></Route>
        <Route path='/update-product/:id' element={<UpdateProductComp/>}></Route>

      </Routes>
      <FootComp></FootComp>
      </BrowserRouter>
    </div>
  );
}

export default App;
