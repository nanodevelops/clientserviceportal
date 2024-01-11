import "./App.scss";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew/AddNew";
// import ClientList from "./pages/ClientsList/ClientList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/clients" element={<ClientList />}/> */}
      <Route path="/clients/addnew" element={<AddNew />}/>
    </Routes>
  )
}

export default App;