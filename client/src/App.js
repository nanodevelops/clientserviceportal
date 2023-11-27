import "./App.scss";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientservices/addnewclient" element={<AddNew />}/>
    </Routes>
  )
}

export default App;