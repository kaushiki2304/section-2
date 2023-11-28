import React from 'react';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter,Link, Route, Routes} from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import NotFound from './components/NotFound';
import StateManagement from './components/StateManagement';
import TodoApp from './components/TodoApp';
import Chat from './components/Chat';
import Listpost from './components/Listpost';
import {Toaster} from 'react-hot-toast';
import Post from './components/Post';


const App = () => {
  return (
    <div>
      <Toaster position='top-center'/>
      
      <BrowserRouter>
      <Navbar/>
      {/* <Link to='/'>Home Page</Link>
      <Link to='/login'>Login Page</Link>
      <Link to='/signup'>Signup</Link> */}
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/event' element={<EventHandling />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/state' element={<StateManagement />} />
          <Route path='/todo' element={<TodoApp />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/listpost' element={<Listpost />} />
          <Route path='/post' element={<Post />} />




         </Routes>
       
       </BrowserRouter>
    </div>
   //components with capital letter, tags with small letters
   //route are create individual components
  )
}

export default App;