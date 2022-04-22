import Login from "./Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Mainpage from "./Mainpage";
import Adminpage from "./Adminpage";
import Unauthregister from "./Unauthregister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/mainpage" element={<Mainpage />}></Route>
          <Route path="/adminpage" element={<Adminpage />}></Route>
          {/* <Route path="/unauthregister" element={<Unauthregister />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
