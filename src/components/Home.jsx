import { useState } from 'react'
import PageIcon from '../components/PageIcon';
import { Link } from 'react-router-dom';
import { FaBookMedical, FaBook , FaUser, FaUserPlus, FaCalendarAlt  } from "react-icons/fa";

function Home() {

  return (
    
    <div className='flex gap-5 mt-5'>

       
            <Link to="/cadastrarlivros">
                <PageIcon texto={"Cadastrar livro"} icone={<FaBookMedical className='w-[60px] h-[60px]  ' color='black'/>}/>
            </Link>
        

          <Link to="/visualizarlivros">
            <PageIcon texto={"Visualizar livros"} icone={<FaBook className='w-[60px] h-[60px]' color='black' />}/>
          </Link>
          <Link to="/cadastraraluno">
            <PageIcon texto={"Cadastrar aluno"}  icone={<FaUserPlus className='w-[60px] h-[60px]' color='black'/>}/>
          </Link>
          <Link to="/visualizaralunos">
            <PageIcon texto={"Visualizar alunos"}  icone={<FaUser className='w-[60px] h-[60px]' color='black'/>
            
             
            }/>
          </Link>

<Link to="/emprestarlivro">
           <PageIcon texto={"Emprestar livro"}  icone={<FaCalendarAlt  className='w-[60px] h-[60px]' color='black'/>}/>
         </Link>

         <Link to="/livrosemprestados">
           <PageIcon texto={"Livros emprestados"}  icone={<FaCalendarAlt  className='w-[60px] h-[60px]' color='black'/>}/>
         </Link>

    </div>

  )
}

export default Home
