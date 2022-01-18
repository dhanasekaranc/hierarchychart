//import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";
import { orgData } from "./empData.js";
import DataProvider from "./components/ContextProvider";
import { Route,Switch } from "react-router-dom";


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
      <DataProvider initState={localData}>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </DataProvider>
    </div>
  );
}

export default App;
