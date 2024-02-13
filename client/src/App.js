import "./App.scss";
import Home from "./pages/Home/Home";
import AddNew from "./pages/AddNew/AddNew";
import Clients from "./pages/Clients/Clients";
import { Routes, Route } from "react-router-dom";
import { ColorContext } from "./ColorContext/darkContext";import { useContext } from "react";


function App() {
  const { darkMode } = useContext(ColorContext)
  return (
    <div className={darkMode ? 'App dark' : 'App'}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/view-all" element={<Clients />}/>
      <Route path="/clients/addnew" element={<AddNew />}/>
    </Routes>
    </div>
  )
}

export default App;