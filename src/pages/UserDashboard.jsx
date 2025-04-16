import React from 'react'
import { useAuth } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const UserDashboard = () => {
  const {role, tokens} = useAuth();
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

export default UserDashboard
