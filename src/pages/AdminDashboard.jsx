import React from 'react'
import { useAuth } from '../context/AuthContext'
import { jwtDecode } from "jwt-decode";

const AdminDashboard = () => {
  const {role, tokens} = useAuth();
  console.log(tokens);
  
  const{GivenName, Surname, Email} = jwtDecode(tokens);
  return (
    <div>
      Hello {role} 
      <p>
        Greeting from {GivenName} {Surname}.
      </p>
    
    </div>
  )
}

export default AdminDashboard
