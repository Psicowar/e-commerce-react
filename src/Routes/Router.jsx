import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent.jsx"
import AllWishesPage from "../Pages/AllWishesPage.jsx"
import CompletedWishesPage from "../Pages/CompletedWishesPage.jsx"
import ActiveWishesPage from "../Pages/ActiveWishesPage.jsx" 



const RouterPath = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/wishes/all" element={<AllWishesPage status='all' />} />
          <Route path="/wishes/active" element={<ActiveWishesPage status='active' />} />
          <Route path="/wishes/completed" element={<CompletedWishesPage status='completed' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPath