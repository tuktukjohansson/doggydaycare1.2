import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Info from './Pages/Info';
import Register from './Pages/Register';
import Nav from './Resources/myroutes';
import Home from './Pages/home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Info/:id" element={<Info/>} />
        </Routes>
      </div>
    </Router>
  );
} export default App;