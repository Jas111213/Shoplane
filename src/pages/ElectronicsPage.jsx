import Header from "../components/Header";
import Navbar from "../components/Navbar"
import ElectronicsList from "../components/ElectronicsList";

const ElectronicsPage=()=>{
    return(
        <>
                <Header/>
                <Navbar/>
                <div className="row">
                  
                    <div className="col-md-12">
                    <ElectronicsList /> 
                    </div>
              
                    
                </div>
                
            
            
       </>
    )
}
 export default ElectronicsPage;
