

import HomePage from "./pages/HomePage";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import JeweleryPage from "./pages/JeweleryPage";
import MenClothingPage from "./pages/MenClothingPage";
import WomenClothingPage from "./pages/WomenClothingPage";


const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage/>}> </Route>
        <Route path="/signup" element={<SignupPage/>}> </Route>
        <Route path="/login" element={<LoginPage/>}> </Route>
        <Route path="/products" element={<ProductPage/>}> </Route>
        <Route path="/products/category/electronics" element={<ElectronicsPage/>}></Route>
        <Route path="/products/category/jewelery" element={<JeweleryPage/>}></Route>
        <Route path="/products/category/men's clothing" element={<MenClothingPage/>}></Route>
        <Route path="/products/category/women's clothing" element={<WomenClothingPage/>}></Route>
        <Route path="/products/:id" element={<ProductDetailPage/>}> </Route>

        <Route path="*" element={<ErrorPage />}> </Route>
      </Routes>
    </Router>
  )
}
export default App;