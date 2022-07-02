import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
// import Num from './components/Num'
// import Word from './components/Word'
import Params from './components/Params'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "/home" element= { <Home />} />
          {/* <Route path= "/:a" element= { <Num />} />
          <Route path= "/:word" element= { <Word />} /> */}
          <Route path="/:word" element={<Params />}/>
          <Route path="/:word/:color/:backCol" element={<Params />}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
