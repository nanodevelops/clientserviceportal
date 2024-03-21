import "./App.scss";
import Home from "./pages/Home/Home";
import AddNew from "./pages/AddNew/AddNew";
import Clients from "./pages/Clients/Clients";
import Complaints from "./pages/Complaints/Complaints";
import { Routes, Route } from "react-router-dom";
import { ColorContext } from "./ColorContext/darkContext";import { useContext } from "react";


function App() {
  const { darkMode } = useContext(ColorContext)
  return (
    <div className={darkMode ? 'App dark' : 'App'}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/view-all" element={<Clients />} />
      <Route path="/clients/addnew" element={<AddNew />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/complaints/view-all" element={<Complaints />}/>
    </Routes>
    </div>
  )
}

export default App;