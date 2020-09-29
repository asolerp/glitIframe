import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let openFrame = () => {
    let iframe = document.createElement("iframe");
    iframe.src = `https://extranet.glovalvaluation.com/DatosTecnicos/CargarDatos?ACTION=START&numexp=260320201035474&codusua=430109&cadena=2b4a3bd7b93bf4b1af9e96f40521b75b`;
    iframe.frameBorder = "0";
    iframe.id = "iframe";
    iframe.style.position = "absolute";
    iframe.style.zIndex = "999";
    iframe.style.height = "100%";
    iframe.style.width = "100%";
    iframe.style.top = "0";
    iframe.style.backgroundColor = "white";
    iframe.style.border = "none";
    iframe.referrerPolicy = 'no-referrer'
    iframe.sandbox = 'allow-same-origin'
    document.body.prepend(iframe);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>This app opens an glit-iframe</p>
        <button onClick={() => openFrame()}>Open IFRAME</button>
        {/* <a 
        style={{color: 'white', textDecoration: 'none'}}
        href="https://extranet.glovalvaluation.com/DatosTecnicos/CargarDatos?ACTION=START&numexp=260320201035474&codusua=430109&cadena=2b4a3bd7b93bf4b1af9e96f40521b75b" target="_blank">Glit</a> */}
      </header>
    </div>
  );
}

export default App;
