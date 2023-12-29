import {useFormik} from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const PostSchema = Yup.object().shape({
  content: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  picture: Yup.string().min('this is a image').required('Required'),
  
});

//step 1 : intilization, it is formik on submit
const Post = () => {

  const createpost = useFormik({
    initialValues:{
      content:'',
      image:''
    },
    onSubmit:async(values, {resetPost}) => {
      // alert(JSON.stringify(values));
      console.log(values);
      const response = await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type':'appication/json'
        }

      });
      // successful- (200-299),redirection-(300-399), client side error-(400-499), server error-(500-599) 

      console.log(response.status);

      // resetPost();
      toast.success('Post Added');
    },
    validationSchema: PostSchema
  });
  return (
    <div><div className="col-md-4 mx-auto py-5">
    <div className="card">
      <div className="card-body">
        <h3 className='my-3 text-center'>Create Post</h3>
        {/* <h5 className='text-center text-muted'>Signup Form</h5> */}

        <form onSubmit={createpost.handleSubmit}>

          <label htmlFor="content">Content</label>
          <span className='text-danger ms-3'>{createpost.touched.content && createpost.errors.content}</span>
          <input type="text" id='content' onChange={createpost.handleChange} value={createpost.values.content} className='text' />
          <br/>
          <label htmlFor="picture">Image</label>
          <span className='text-danger ms-3'>{createpost.touched.picture && createpost.errors.picture}</span>
          <input type="text" id='picture' onChange={createpost.handleChange} value={createpost.values.picture} className='form-control mb-4' />

          
          <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>

        </form>

      </div>
    </div>
  </div></div>
  )
}

export default Post;