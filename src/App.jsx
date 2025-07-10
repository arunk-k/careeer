import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import './App.css'
import About from "./components/About/About"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Explore from "./components/explore/Explore"
import Profile from "./components/Profile/Profile"
import Suggest from "./components/suggest/Suggest"
import Developer from "./components/explore/Developer"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route path="/explore/developer" element={<Developer />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
