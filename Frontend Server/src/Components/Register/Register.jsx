import React from 'react';
import styles from './Register.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Helmet } from "react-helmet";

// import toast, { Toaster } from 'react-hot-toast';
export default function Register() {

    //NOTE - Display toastMessage
    const toastMessage = (msg) => {
      toast.success(msg, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide
      });
    }

  //NOTE - useNavigate initialization
  let navigate = useNavigate();


  //NOTE - handleLogin function
  async function handleLogin(values) {

    let {data} = await axios.post('http://localhost:4000/app2/', values).catch((errr)=>{
    
        toastMessage(`Registration Failed 👎`)
        console.log(JSON.stringify(data));
  
    })
    if(data){
      toastMessage(`Registration Succeeded 👍`)
      console.log(JSON.stringify(data));
      navigate('/Login');
     }
   
  }

    //NOTE - yup initialization
    let mySchema = Yup.object({
      firstName: Yup.string().required('name is required').min(3, 'min chars are 3 ').max(20, 'max chars are 20'),   
      lastName: Yup.string().required('name is required').min(3, 'min chars are 3 ').max(20, 'max chars are 20'),
      email: Yup.string().email('').required('email is required'),
      password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}/, 'invalid password').required('password is required'),
      dateOfBirth: Yup.string().required('Date of birth is required').min(3, 'min chars are 3 ').max(20, 'max chars are 20'),   
      country: Yup.string().required('country is required').min(3, 'min chars are 3 ').max(20, 'max chars are 20'),   
      confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password')], 'passwords not matches'),
      phoneNumber: Yup.object().shape({
        countryCode: Yup.string().required('Country code is required'),
        number: Yup.string()
          .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
          .required('Phone number is required'),
      }),
    });
  
  
  
  

    // formik initialization 
let formik = useFormik({
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    dateOfBirth: "",
    phoneNumber: { countryCode: "", number: "" }  // update phone field to an object
  },
  validationSchema: mySchema,
  onSubmit: handleLogin
});



  return (
    <>

      {/* //NOTE -Helmet  */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registration</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>



      <div className=" container my-3">
        <div className="row">
          <div className={`${styles.card}  card text-white `}>

            <h2 className='text-white '>Register</h2>

            <form onSubmit={formik.handleSubmit} >
            <label htmlFor="firstName">firstName:</label>
              <input type="text" id='firstName' className='form-control mb-2' name='firstName' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.firstName && formik.touched.firstName ? <div className="alert alert-danger">{formik.errors.firstName}</div> : ''}
            
              <label htmlFor="lastName">lastName:</label>
              <input type="text" id='lastName' className='form-control mb-2' name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.lastName && formik.touched.lastName ? <div className="alert alert-danger">{formik.errors.lastName}</div> : ''}
            
              <label htmlFor="Email">Email:</label>
              <input type="text" id='Email' className='form-control mb-2' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : ''}

              <label htmlFor="Password">Password:</label>
              <input type="Password" id='Password' className='form-control mb-2' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : ''}

              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="Password" id='confirmPassword' className='form-control mb-2' name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />

              {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="alert alert-danger">{formik.errors.confirmPassword}</div> : ''}

    
              <label htmlFor="country">country:</label>
              <input type="text" id='country' className='form-control mb-2' name='country' value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.country && formik.touched.country ? <div className="alert alert-danger">{formik.errors.country}</div> : ''}

              <label htmlFor="dateOfBirth">date Of Birth:</label>
              <input type="date" id='dateOfBirth' className='form-control mb-2' name='dateOfBirth' value={formik.values.dateOfBirth} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? <div className="alert alert-danger">{formik.errors.dateOfBirth}</div> : ''}

              <div>
        <label htmlFor="countryCode">Country Code:</label>
        <input
          type="text"
          id="countryCode"
          name="phoneNumber.countryCode"
          value={formik.values.phoneNumber.countryCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phoneNumber?.countryCode && formik.errors.phoneNumber?.countryCode && (
          <div>{formik.errors.phoneNumber.countryCode}</div>
        )}
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber.number"
          value={formik.values.phoneNumber.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phoneNumber?.number && formik.errors.phoneNumber?.number && (
          <div>{formik.errors.phoneNumber.number}</div>
        )}
      </div>


              <button className='btn btn-success mb-3' type='submit'>Register</button>

            </form>

          </div>
        </div>
      </div>
    </>
  );
}
