import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Home/>
      
    </div>
  );
}

export default App;
