 import { useState } from 'react';
import './App.css'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom" ;

function App() {
  const[mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled");
    }
  }
 
  return (
      <>

                <Router>
                < Navbar title = "TxtUtils" mode = {mode} toggleMode = {toggleMode}/>
                <Alert alert ={alert}/>
                <div className="container my-3">
                  <Switch>
                    <Route path="/about">
                      <About/>
                    </Route>
                    <Route path="/">
                    <TextForm  showAlert = {showAlert} heading = " Enter the text to analyze" mode = {mode}   />
                    </Route>
                  </Switch>
                  </div>
                  </Router> 
      </>
    
  );
}

export default App;
