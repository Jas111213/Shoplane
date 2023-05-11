import Header from "../components/Header";
import Navbar from "../components/Navbar"
import WomenClothingList from "../components/WomenClothingList";

const WomenClothingPage=()=>{
    return(
        <>
                <Header/>
                <Navbar/>
                <div className="row">
                  
                    <div className="col-md-12">
                    <WomenClothingList /> 
                    </div>
              
                    
                </div>
                
            
            
       </>
    )
}
 export default WomenClothingPage;
