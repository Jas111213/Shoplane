
import Header from "../components/Header";
import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList"

const ProductPage=()=>{
    return(
        <>
        <Header/>
        <Navbar/>
       
        <div className="row">
            <div className="col-md-12">
                <ProductList />
              </div>
              
            
        </div>
        </> )
} 
 export default ProductPage;
