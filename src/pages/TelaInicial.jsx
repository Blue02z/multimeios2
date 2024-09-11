import { useState } from 'react'
import PageIcon from '../components/PageIcon';
import { Link } from 'react-router-dom';
import { FaBookMedical, FaBook , FaUser, FaUserPlus } from "react-icons/fa";
import Home from '../components/Home';
import NavBar from '../components/NavBar';
function TelaInicial() {

  return (
    
    <div>

        <NavBar/>
        <Home/>
       
            
    </div>

  )
}

export default TelaInicial
