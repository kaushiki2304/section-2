import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Event Handling</h1>
      <hr />
      <button className='btn btn-primary' onClick={ ()=>{prompt('nice alert!!');}}>My Button</button>
       
      <input type='text' className='form-control mt-4'onChange={ (e)=>{console.log(e.target.value)} }/>

      <input type='color' onChange={(c)=> {console.log(c.target.value);}}/>
      <input type='color' onChange={(e)=>{document.body.style.backgroundColor=e.target.value;}}/>
    </div>
  )
}

export default EventHandling;
