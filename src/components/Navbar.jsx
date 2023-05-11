import { Link } from "react-router-dom";

const Navbar =()=>{
return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/products">All <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/category/electronics">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/category/jewelery">Jewelery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/category/men's clothing ">Men's Clothing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/category/women's clothing ">Women's Clothing</Link>
        </li>
    </ul>
    </div>
   </nav>
  </div>
 
  )

  }
export default Navbar;