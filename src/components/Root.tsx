import {Navigate} from 'react-router-dom';
import React from 'react';
export const Root:React.FC=()=>{
  const hasRead = localStorage.getItem('hasReadWelcomes')
  if (hasRead === 'yes'){
    return <Navigate to="/home"/>
  }else {
    return <Navigate to="/welcome/1"/>
  }
}