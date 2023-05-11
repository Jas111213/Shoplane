import React from "react";
const Header = () => {
    
    return (
        <div>
            <nav className="navbar navbar-none">
                <div id="logo"><span>SHOP</span>LANE</div>

                 <div className='buttons'>
                <a href="/login" className="btn btn-outline-dark ">
                    <i className="fa fa-sign-in"></i>Login</a>

                <a href="/signup" className="btn btn-outline-dark " id='btn2'>
                    <i className="fa fa-user-plus "></i>Sign Up</a>
                </div>
                
             <button>
                    <i className="fa fa-shopping-cart fa-2x"></i>
                    <span className="badge badge-light"></span>

    </button>
    

            </nav>

        </div>
    )
}
export default Header;