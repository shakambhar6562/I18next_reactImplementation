import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import New from './components/New';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<Form/>} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
