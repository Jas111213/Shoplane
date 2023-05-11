
import { Link } from "react-router-dom";

const Jewelery =(props)=>{
    const{id,title,price,category,description,image}=props.data;
  
    return(
    <div className="col-sm-3  mb-4">
      <div className="card h-100 text-center p-4" key={id}>
        <img src={image} className="card-img-top" alt={title} height={'250px'}/>
        <hr/>
        <div className="card-body">
          <h6 className="card-title mb-0"><b>Brand,</b> {title.substring(0,15)}...</h6>
          <p className="card-text " style={{color:"red",fontSize:"20px"}}>
            ${price}
           </p>
          
          <Link to={"/products/" + id} className="btn btn-primary btn-block" >Add to Cart</Link>
        </div>
      </div>
    </div>
  

    )
}
export default Jewelery;