
import React,{useState,useEffect} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import EndPoints from "../api/EndPoints";
import {  useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Actions/cart-actions";


const ProductDetailPage=()=>{
   const {id}= useParams();
   const [products,setProducts]=useState({})

   const dispatch= useDispatch();

    const fetchData= async()=>{
         const response= await axios.get(EndPoints.PRODUCT_URL + id)
         setProducts(response.data)
     
    }

    const onClickHandler=()=>{
        dispatch(addToCart(products))
    }
    useEffect(()=>{
        fetchData()
    },[id])
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="container">
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-6">
                        <img src={ products.image} height={'250px'} alt=""/>
                    </div>
                    <div className="col-md-6">
                       <h4 style ={{color:"blue"}}> <b>Brand</b><br/>{products.title}</h4>
                        <p>{products.description}</p>

                        <p style={{color:"red",fontSize:"25px"}}>${products.price}</p>
                        <button onClick={onClickHandler} className="btn btn-primary ">Add to cart</button>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </>

    )
    }     
    export default ProductDetailPage; 