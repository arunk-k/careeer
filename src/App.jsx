import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import './App.css'
import About from "./components/About/About"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
