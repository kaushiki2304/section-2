import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ManageUser = () => {

  const [userArray, setUserArray] = useState([]);

    const getUserData =async()=>{
        const res= await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        const data= await res.json();
        console.table(data);

        setUserArray(data);  
    }

    //to run page
    useEffect(() => {
      getUserData();
    
    }, []);

    const deleteUser = async (id)=>{
         console.log(id);
    

    const res= await fetch('http://localhost:5000/user/delete/'+id, {
      method: 'DELETE',
    });

    console.log(res.status);
    getUserData();
    toast.success('user deleted successfully');

  }

    const displayUserData= () => {
      if(userArray.length){
        return userArray.map((user)=>{
          return <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.location}</td>
            <td>{user.password}</td>
            <td>
              <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>Delete User</button>
            </td>
            <td>
              <Link to={'/updateuser/'+user._id} className='btn btn-primary'>Update user</Link>
            </td>
          </tr>
        })
      }
    }
    
  return (
    <div>
      <div className='container'>
        <h1 className='text-center'>Manage User Data</h1>
        <hr/>
        <table className='table table-dark'>
          <thead>
           <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Password</th>
            <th colspan={2}>Actions</th>
           </tr>
          </thead>
          <tbody>
           {displayUserData()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageUser