import logo from './logo.svg';
import Navbar from './navbar';
import Home from './home';

function App() {
  const title = "Uzonna Alexander's Website";
  const likes = 50;

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
