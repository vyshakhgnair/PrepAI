import './App.css';
import { Router ,Route , Routes} from "react-router-dom";
import Landing from './components/LandingPage/Landing';
import NavBar from './components/Navbar/NavBar';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  
  return (
    <div className="App">
 <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" component={Landing} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/dashboard" component={DashBoard} />
     
      </Routes>
    </Router>
    </div>    
  );
}

export default App;
