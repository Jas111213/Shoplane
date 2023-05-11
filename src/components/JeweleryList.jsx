import React, { useState, useEffect } from "react";
import axios from 'axios';
import EndPoints from "../api/EndPoints";
import Jewelery from "./Jewelery"




const JeweleryList =()=>{
   const category= "jewelery"
   const [categories,setCategories] = useState([])
    const fetchData=async()=>{
        try{
            const response=await axios.get(EndPoints.CATEGORY_URL + category)
            setCategories(response.data)
            console.log(response.data)
        }
         catch(error){
            console.log(error)
        }
    }


useEffect(()=>{
    fetchData();
},[category])
  
return(
    <><div >
    <div className="row">
        {
        
          categories.map((product)=><Jewelery data={product}/>)

        }
    </div>
   
</div>

    
    </>

) 


}
export default JeweleryList;


