import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent.jsx"
import WishPage from "../Pages/WishPage"



const RouterPath = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route path="/wishes/all"  element={<WishPage status='all'/>}/>
          <Route path="/wishes/active" element={<WishPage status='active'/>}/>
          <Route path="/wishes/completed" element={<WishPage status='completed'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPath