
import './App.css'
import { RouterProvider } from 'react-router-dom';

import Routes from "./Routes"
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
function App() {
  const {auth} = useContext(AuthContext)
  
  //console.log("auth from app ", auth)
  return (
    <>    
      
         <RouterProvider router={Routes} />

        </>
  )
}

export default App
