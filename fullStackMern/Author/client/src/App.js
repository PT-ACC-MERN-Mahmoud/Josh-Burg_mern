import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DisplayAll from './components/DisplayAll';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';





function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<CreateAuthor />} />
          <Route path="/edit/:id" element={<EditAuthor />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
