import {Formik, useFormik} from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Feedback = () => {

    const {id} = useParams();

    const [Feedback, setFeedback] = useState(null);  

    // const [Feedback, setFeedback] = useState(null);

    const getFeedback = async () => {
        const res = await fetch('http://localhost:5000/feedback/getbyid/');
         console.log(res.status);
        const data = await res.json();
        console.log(data);

        setFeedback(data);
    }

    useEffect(() => {
      getFeedback();
    }, [])
     
    const submitForm= async (values, {resetForm}) => {
      // alert(JSON.stringify(values));
      console.log(values);

      //send request to backend or rest API
      //to convert javascript in json  JSON.stringify(values)
      //header is case sensitive (data type is json)

      const response = await fetch('http://localhost:5000/feedback/update/',{
        method:'PUT',
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
    }

  return (
    <div>
        <div className='container py-5'>
        <div className="card shadow">
            <div className="card-body p-5">
              <h3 className='my-3 text-center'>Brand Logo</h3>
              <h5 className='text-center text-muted'>Feedback</h5>

              {
               Feedback!==null ?(
                  <Formik initialValues={Feedback} onSubmit ={submitForm}>
                             {({values, handleChange, handleSubmit, errors, touched})=>{
                              return  <form onSubmit={handleSubmit} >

                              <label htmlFor="name">Name</label>
                              <span className='text-danger ms-3'>{touched.name && errors.name}</span>
                              <input type="text" id='name' onChange={handleChange} value={values.name} className='form-control mb-4' />
              
                              <label htmlFor="email">Email Address</label>
                              <span className='text-danger ms-3'>{touched.email && errors.email}</span>
                              <input type="text" id='email' onChange={handleChange} value={values.email} className='form-control mb-4' />
              
                              <label htmlFor="message">Your Message</label>
                              <span className='text-danger ms-3'>{touched.message && errors.message}</span>
                              <input type="type" id='message' onChange={handleChange} value={values.message} className='form-control mb-4' />
              
                              <label htmlFor="ratings">Ratings</label>
                              <span className='text-danger ms-3'>{touched.ratings && errors.ratings}</span>
                              <input type="type" id='ratings' onChange={handleChange} value={values.ratings} className='form-control mb-4' />
              

                              <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>
              
                            </form>
                             } }
                  </Formik>
               ) : ( <h1 className='my-5 text-center text-muted'>Loading user Feedback..</h1>)
              }

              

             

            </div>
          </div>
        </div>
    </div>
  )
}

export default Feedback;