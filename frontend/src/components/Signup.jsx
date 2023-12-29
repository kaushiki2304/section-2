import {useFormik} from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5,'Too Short!').required('Required')
  .matches(/[0-9]/,'Number is required')
  .matches(/[a-z]/, 'Lowercase letter is required')
  .matches(/[A-Z]/, 'Uppercase letter is required')
  .matches(/[^\w]/, 'Special character is required'),
  confirm: Yup.string().oneOf([Yup.ref('password'),null],'passwod does not match').required('Required')
});

//step 1 : intilization, it is formik on submit
const Signup = () => {

  const signupForm = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirm:''
    },
    onSubmit: async (values, {resetForm}) => {
      // alert(JSON.stringify(values));
      console.log(values);

      //send request to backend or rest API
      //to convert javascript in json  JSON.stringify(values)
      //header is case sensitive (data type is json)

      const response = await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type':'application/json'
        }

      });
      // successful- (200-299),redirection-(300-399), client side error-(400-499), server error-(500-599) 

      console.log(response.status);
      console.log(response.statusText);

      if(response.status === 200){
        enqueueSnackbar('Register successfully',{variant:'success'});
      }else {
        enqueueSnackbar('something went wrong',{variant:'error'});
      }

      // // resetForm();
      // toast.success('Form Submitted Successfully');
    },
    validationSchema: SignupSchema
  });
  // step 2: inthis is event handling's onsubmit
  return (
    <div>

      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h3 className='my-3 text-center'>Brand Logo</h3>
            <h5 className='text-center text-muted'>Signup Form</h5>

            <form onSubmit={signupForm.handleSubmit}>

              <label htmlFor="name">Name</label>
              <span className='text-danger ms-3'>{signupForm.touched.name && signupForm.errors.name}</span>
              <input type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name} className='form-control mb-4' />

              <label htmlFor="email">Email Address</label>
              <span className='text-danger ms-3'>{signupForm.touched.email && signupForm.errors.email}</span>
              <input type="text" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} className='form-control mb-4' />

              <label htmlFor="password">Password</label>
              <span className='text-danger ms-3'>{signupForm.touched.password && signupForm.errors.password}</span>
              <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} className='form-control mb-4' />
              
              <label htmlFor="confirm"> ConfirmPassword</label>
              <span className='text-danger ms-3'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
              <input type="password" id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} className='form-control mb-4' />

              <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup;