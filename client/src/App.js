import './App.css';
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from './components/LandingPage/Landing';
import DashBoard from './components/DashBoard/DashBoard';
import ResumeUploader from './components/ResumeATS/Resumeats';
import Register from './components/UserManage/Register';
import Login from './components/UserManage/Login';



function App() {
  
  return (
    <div className="App">
<Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" exact element={<DashBoard/>} />
        <Route path="/ats" element={<ResumeUploader/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  </Router>    
    </div>    
  );
}

export default App;
