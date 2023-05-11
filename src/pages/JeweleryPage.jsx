import Header from "../components/Header";
import Navbar from "../components/Navbar"
import JeweleryList from "../components/JeweleryList";

const JeweleryPage=()=>{
    return(
        <>
                <Header/>
                <Navbar/>
                <div className="row">
                  
                    <div className="col-md-12">
                    <JeweleryList /> 
                    </div>
              
                    
                </div>
                
            
            
       </>
    )
}
 export default JeweleryPage;
