import "./App.scss";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew/AddNew";
import Clients from "./pages/Clients.js/Clients";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/clients/view-all" element={<Clients />}/>
      <Route path="/clients/addnew" element={<AddNew />}/>
    </Routes>
  )
}

export default App;