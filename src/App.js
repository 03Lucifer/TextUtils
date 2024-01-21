import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const darkToggler = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2d1853'
      showAlert("Dark mode has been enabled", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "Success")
    };
  }

  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title = "TextUtils4" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} darkToggler={darkToggler} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}


  // <BrowserRouter>
  //   {/* <Navbar/> */}
  //   {/* <Navbar title = "TextUtils4" aboutText="About TextUtils"/> */}
  //   <Navbar title="TextUtils" mode={mode} darkToggler={darkToggler} />
  //   <Alert alert={alert} />
  //   <div className='container my-3'>
  //     <Routes>
  //       <Route exact path="/about" element={<About />}></Route>
  //       <Route exact path="/" element={<Textorm showAlert={showAlert} heading="Enter Text to analyze " mode={mode} />}></Route>
  //     </Routes>
  //   </div>
  // </BrowserRouter>


export default App;
