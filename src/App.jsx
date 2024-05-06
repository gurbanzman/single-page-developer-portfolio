import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreatePortfolio from "./pages/CreatePortfolio"
import Contact from "./pages/Contact"
import { useEffect, useState } from "react"

function App() {
  let [data,setData]=useState({})
  useEffect(()=>{
    fetch("http://localhost:3000/users_portfolio")
    .then(response=> response.json())
    .then(data=> data.find(item=> {
      if(item.exp){
        setData(item)
      }
      else{
        setData({...data,exp:[]})
      }
    }));
  },[])
  
  return (
    <>
    <Navbar data={data}/>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/create-your-own-portfolio" element={<CreatePortfolio />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
      <Footer data={data}/>
    </>
  )
}

export default App
