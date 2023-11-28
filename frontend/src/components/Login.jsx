import {useFormik} from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5,'Too Short!').required('Required')
  .matches(/[0-9]/,'Number is required')
  .matches(/[a-z]/, 'Lowercase letter is required')
  .matches(/[A-Z]/, 'Uppercase letter is required')
  .matches(/[^\w]/, 'Special character is required'),

});
const Login = () => {

  const loginForm = useFormik({
    initialValues:{
      email:'',
      password:'',
    
    },
    onSubmit:(values, {resetForm}) => {
      // alert(JSON.stringify(values));
      console.log(values);
      // resetForm();
      toast.success('Form Submitted Successfully');
    },
    validationSchema: LoginSchema
  });
  
  return (
    <div class="card w-25">
    <div class="card-body">
        <h3 class="text-center my-5">Login Form</h3>


        <form onSubmit={loginForm.handleSubmit}>


        <label htmlFor="email">Email Address</label>
              <span className='text-danger ms-3'>{loginForm.touched.email && loginForm.errors.email}</span>
              <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-4' />

              <label htmlFor="password">Password</label>
              <span className='text-danger ms-3'>{loginForm.touched.password && loginForm.errors.password}</span>
              <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-4' />
              
              
       
        <button class="btn btn-primary w-100 mt-4" >Submit</button>
        
        
       </form>
    </div>
</div>
 
  )
}

export default Login;