import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        age={53}
        hair={"Red headed"}
      />
      <PersonCard
        firstName={"John"}
        lastName={"Doe"}
        age={31}
        hair={"Blonde"}
      />
    </div>
  );
}

export default App;
