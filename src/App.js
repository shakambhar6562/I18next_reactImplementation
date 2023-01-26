import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Antd2";
import Header from "./components/Header";
import New from './components/New';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Form from "./components/Form";
import Form2 from './Forms2';
import Ant from './components/Antd';
import FinalForm from "./components/FinalForm";
function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<FinalForm val="true" />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
