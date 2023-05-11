import React, { useState, useEffect } from "react";
import axios from 'axios';
import EndPoints from "../api/EndPoints";
import MenClothing from "./MenClothing";




const MenClothingList =()=>{
   const category= "men's clothing";
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
        
          categories.map((product)=><MenClothing data={product}/>)

        }
    </div>
   
</div>

    
    </>

) 


}
export default MenClothingList;


