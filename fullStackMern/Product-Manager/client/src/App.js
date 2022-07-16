import './App.css';
import Main from "./view/Main";
import OneProduct from "./components/OneProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/product/:id" element={<OneProduct/>}/> 
            <Route path="/product/edit/:id" element={<EditProduct/>}/>
        </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
