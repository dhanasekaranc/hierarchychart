import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";
import { useEffect, useState, useContext } from "react";
import { orgData } from "./empData.js";
import DataProvider from "./components/ContextProvider";


let localData = localStorage.getItem("DATA");

if (localData) {
    localData = JSON.parse(localData);
}
else {
    localStorage.setItem("DATA", JSON.stringify(orgData));
    localData = JSON.parse(JSON.stringify(orgData));
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <DataProvider initState={localData}>
      <Dashboard />
      </DataProvider>
    </div>
  );
}

export default App;
