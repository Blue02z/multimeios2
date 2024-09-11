import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { FaUserPlus } from 'react-icons/fa';
import React, { useRef, useState } from 'react';

function CadastrarAlunos() {
  const [nome, setNome] = useState('');
  const [serie, setSerie] = useState('');
  const [matricula, setMatricula] = useState('');
  const [curso, setCurso] = useState('');

  const input1 = useRef(null);
  const input2 = useRef(null);

  const cadastrarAluno = () => {
    const aluno = {
      nome: input1.current.value,
      matricula: input2.current.value,
      curso,
      serie
    };

    // Recuperar alunos existentes do localStorage
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    
    // Adicionar novo aluno à lista
    alunos.push(aluno);
    
    // Salvar a lista de alunos atualizada no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    // Atualizar o estado com os valores dos inputs
    setNome(aluno.nome);
    setMatricula(aluno.matricula);
    setSerie(aluno.serie);
    setCurso(aluno.curso);

    // Limpar os inputs após o cadastro
    input1.current.value = '';
    input2.current.value = '';
    setSerie('');
    setCurso('');
  };

  return (
    <div>
      <NavBar />
      <Titulo imagem={<FaUserPlus className='w-[200px] h-[130px]' />} titulo={"Cadastrar aluno"} />

      <div className='justify-center items-center flex flex-col'>
        <div className='flex justify-center flex-wrap items-center gap-3'>
          <div>
            <span><p className='font-bold text-[16px]'>Nome</p></span>
            <div className='w-[250px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <input ref={input1} className='px-2 w-[250px] h-[40px] bg-transparent' type="text" />
            </div>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Matricula</p></span>
            <div className='w-[250px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <input ref={input2} className='px-2 w-[250px] h-[40px] bg-transparent' type="number" />
            </div>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Curso</p></span>
            <select onChange={(e) => setCurso(e.target.value)} value={curso} className='w-[120px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <option value="">Curso</option>
              <option value="Enfermagem">Enfermagem</option>
              <option value="Redes">Redes</option>
              <option value="Desenvolvimento de sistemas">Desenvolvimento de sistemas</option>
              <option value="Hospedagem">Hospedagem</option>
            </select>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Série</p></span>
            <select onChange={(e) => setSerie(e.target.value)} value={serie} className='w-[120px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <option value="">Série</option>
              <option value="1° ano">1° ano</option>
              <option value="2° ano">2° ano</option>
              <option value="3° ano">3° ano</option>
            </select>
          </div>
        </div>

        <div className='w-[180px] rounded-[6px] h-[65px] bg-[#1F7122] flex justify-center items-center hover:cursor-pointer hover:bg-[#1F7122] mt-[180px]' onClick={cadastrarAluno}>
          <h2 className='text-white text-[24px] font-bold'>Cadastrar</h2>
        </div>
      </div>
    </div>
  );
}

export default CadastrarAlunos;
