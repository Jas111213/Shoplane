
import React,{useState,useEffect} from "react";
import axios from "axios";
import { Formik,Form,Field,ErrorMessage } from "formik";
import *as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import EndPoints from "../api/EndPoints";



const LoginPage =()=>{

    const[requestResponse,setRequestResponse] = useState({
        textMessage:'',
        className:''
    })

    const nav=useNavigate()
    const initialState = {
        email: "",
        password: "",
       
    }

    const  validationSchema=()=>Yup.object({
         email:Yup.string().required("Email is required").email("email type is invalid"),
        password:Yup.string().required("Password is required").min(6,"Password must be at least 6 characters long").max(12,'Password must be  max of 12 characters long'),
       

     }  )
      const onSubmit = (values) => {
        axios.post(EndPoints.LOGIN_URL,values)
        .then((response)=>{
            console.log(response.data)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('user',JSON.stringify(response.data.user))
            setRequestResponse({
                textMessage:'login successful,thank u',
                className:'alert alert-success'
            })
            nav('/')
        },(error)=>{
            console.log(error.response.data.message)
            setRequestResponse({
                textMessage:error.response.data.message,
                className:'alert alert-danger'
            })

        })
        .catch(error=>console.log(error))
      }


    
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <div className="wrapper">
                            <div  className={requestResponse.className} role="alert">
                                {requestResponse.textMessage}
                            </div>
                            <h2 style={{textAlign:'center'}}>Login</h2>
                            <Formik
                            initialValues={initialState}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount>
                                {(formik)=>{
                                    return(
                                        <Form className="form-group">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <Field name="email" type="text" className="form-control"/>
                                        <ErrorMessage name="email">
                                            {(errorMessage)=>(
                                                        <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <Field name="password" type="text" className="form-control"/>
                                        <ErrorMessage name="password">
                                            {(errorMessage)=>(
                                                        <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    
                                    

                                    <p className="text-center">
                                            Don't have an account? Sign up <Link to="/signup">here</Link>
                                    </p>
                                    <input type="submit" value="Login" className="btn btn-primary btn-block"/>
                                     
                                    </Form>
                                    )

                                }}
                                
                            </Formik>
                            </div>
                            </div>
                            <div className="col-md-3"></div>

            </div>
            </div>
        )
    }                                     
export default LoginPage;
                         