
import React,{useEffect,useState} from "react";
import axios from "axios";
import Product from "./Product";
import EndPoints from "../api/EndPoints";

const ProductList =()=>{
   
    const [products,setProducts] = useState([])
     const fetchData=async()=>{
        try{
           const response= await axios.get(EndPoints.PRODUCT_URL)
            setProducts(response.data)
            }
            catch(error){
            console.log(error)
        }}
useEffect(()=>{
    fetchData();
},[])
  
  

return(
    <div >
        <div className="row">
            {
            
              products.map((product)=><Product data={product}/>)

            }
        </div>
       
    </div>
)

}
export default ProductList;



