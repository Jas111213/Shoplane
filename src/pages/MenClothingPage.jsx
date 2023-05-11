import Header from "../components/Header";
import Navbar from "../components/Navbar"
import MenClothingList from "../components/MenClothingList";

const MenClothingPage=()=>{
    return(
        <>
                <Header/>
                <Navbar/>
                <div className="row">
                  
                    <div className="col-md-12">
                    <MenClothingList /> 
                    </div>
              
                    
                </div>
                
            
            
       </>
    )
}
 export default MenClothingPage;
