
import React from "react";
import { useFormik } from "formik";
import *as Yup from 'yup';
import axios from "axios";
import EndPoints from "../api/EndPoints";
import { Link } from "react-router-dom";


const SignupPage = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cPassword: ""
    }

    const onSubmit = (values) => {
        axios
        .post(EndPoints.SIGNUP_URL,values)
        .then((response)=>console.log(response.data))
        .catch((error)=>console.log(error))
    }
     const  validationSchema=()=>Yup.object({

        firstName:Yup.string().required("First name is required").min(3,"Name must be min of 3 characters"),
        lastName:Yup.string().required("Last name is required"),
        email:Yup.string().required("Email is required").email("email type is invalid"),
        password:Yup.string().required("Password is required").min(6,"Password must be at least 6 characters long").max(12,'Password must be  max of 12 characters long'),
        cPassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required("Confirm password is required")


     }  )
    
    const formik = useFormik({
            initialValues,
            onSubmit,
            validationSchema,
            validateOnMount: true

        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <div className="wrapper">
                            <h2 style={{textAlign:'center'}}>Sign Up</h2>
                            
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form_group">
                                    <label>First Name</label>
                                    <input type="text" 
                                     name="firstName"
                                      value={formik.values.firstName}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      className={formik.touched.firstName && formik.errors.firstName ?"form-control is-invalid":"form-control"}></input>
                                      { formik.touched.firstName &&formik.errors.firstName?(
                                         <small className="text-danger">{formik.errors.firstName}</small>
                                      ):null}

                                </div>
                                <div className="form_group">
                                    <label>Last Name</label>
                                    <input type="text"  name="lastName" 
                                    value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.lastName && formik.errors.lastName ?"form-control is-invalid":"form-control"} ></input>
                                { formik.touched.lastName &&formik.errors.lastName?(
                                         <small className="text-danger">{formik.errors.lastName}</small>
                                      ):null}
                                
                                </div>

                                <div className="form_group">
                                    <label>Email Address</label>
                                    <input type="email"  name="email" 
                                    value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ?"form-control is-invalid":"form-control"}/>
                                    { formik.touched.email &&formik.errors.email?(
                                        <small className="text-danger">{formik.errors.email}</small>
                                     ):null}

                                     
                                </div>

                                <div className="form_group">
                                    <label> Password</label>
                                    <input type="password" name="password" 
                                    value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ?"form-control is-invalid":"form-control"}></input>
                               { formik.touched.password &&formik.errors.password?(
                                         <small className="text-danger">{formik.errors.password}</small>
                                      ):null}
                               
                               
                                </div>

                                <div className="form_group">
                                    <label> Confirm Password</label>
                                    <input type="password"  name="cPassword" 
                                    value={formik.values.cPassword} onChange={formik.handleChange}onBlur={formik.handleBlur} className={formik.touched.cPassword && formik.errors.cPassword ?"form-control is-invalid":"form-control"} ></input>
                                    { formik.touched.cPassword &&formik.errors.cPassword?(
                                        <small className="text-danger">{formik.errors.cPassword}</small>
                                     ):null}

                                </div>
                                <p className="text-center">
                                    Already have an account? Login <Link to="/login">here.</Link>

                                </p>
                                <br />

                                <input type="submit"   value="Sign Up" className="btn btn-primary btn-block"/>
                            </form>



                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>


                </div>
            </div>
        )
                                     
    }



export default SignupPage;
