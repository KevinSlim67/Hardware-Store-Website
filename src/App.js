import './App.scss';
import HomePage from './components/home_page';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <div className="App bg-secondary">
      <div className="Layout">
        <NavBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
