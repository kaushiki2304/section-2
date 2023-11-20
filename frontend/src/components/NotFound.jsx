import React from 'react'
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    // <div className='text-center'>
    //     <p className='display-1 fw-bold  mt-5'>404- Page not Found</p>
    //     <img src='/mypic.jpg' alt='' />
    //     <Link className='btn btn-primary mt-5' to='/'>Back to home page</Link>
    // </div>
    <section class="page_404">
  <div class="container">
    <div class="row"> 
    <div class="col-sm-12 ">
    <div class="col-sm-10 col-sm-offset-1  text-center">
    <div class="four_zero_four_bg">
      <h1 class="text-center ">404</h1>
    
    
    </div>
    
    <div class="contant_box_404">
    <h3 class="h2">
    Look like you're lost
    </h3>
    
    <p>the page you are looking for not avaible!</p>
    
    <a href="" class="link_404">Go to Home</a>
  </div>
    </div>
    </div>
    </div>
  </div>
</section>
  )
}

export default NotFound;