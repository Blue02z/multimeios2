import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { FaUser, FaCheckCircle   } from 'react-icons/fa';
import { MdDelete, MdEdit, MdCancel } from "react-icons/md";

function Aluno() {
  const [alunos, setAlunos] = useState([]);
  const [editingAluno, setEditingAluno] = useState(null);
  const [formValues, setFormValues] = useState({
    nome: '',
    matricula: '',
    curso: '',
    serie: '',
  });

  useEffect(() => {
    // Recupera a lista de alunos do localStorage quando o componente é montado
    const alunosSalvos = JSON.parse(localStorage.getItem('alunos')) || [];
    setAlunos(alunosSalvos);
  }, []);

  const handleDelete = (index) => {
    const updatedAlunos = alunos.filter((_, i) => i !== index);
    localStorage.setItem('alunos', JSON.stringify(updatedAlunos));
    setAlunos(updatedAlunos);
  };

  const handleEdit = (index) => {
    const aluno = alunos[index];
    setFormValues(aluno);
    setEditingAluno(index);
  };

  const handleSave = () => {
    const updatedAlunos = alunos.map((aluno, index) =>
      index === editingAluno ? formValues : aluno
    );
    localStorage.setItem('alunos', JSON.stringify(updatedAlunos));
    setAlunos(updatedAlunos);
    setEditingAluno(null);
    setFormValues({
      nome: '',
      matricula: '',
      curso: '',
      serie: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <Titulo imagem={<FaUser className='w-[200px] h-[130px]' />} titulo={"Lista de alunos"} />

      <div className='outline-2 rounded-[6px] flex flex-col items-center'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white font-bold text-[24px]'>Lista de Alunos</h1>
        </div>
        <div className='flex font-bold'>
          <div className='w-[70px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Id</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Nome</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Matricula</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Curso</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Série</h1>
          </div>
          <div className='w-[100px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Apagar</h1>
          </div>
          <div className='w-[100px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Editar</h1>
          </div>
        </div>

        {alunos.length > 0 ? (
          alunos.map((aluno, index) => (
            <div key={index} className='flex font-medium'>
              <div className='w-[70px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                <p className='text-[#363636]'>{index + 1}</p>
              </div>
              {editingAluno === index ? (
                <>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <input
                      type='text'
                      name='nome'
                      value={formValues.nome}
                      onChange={handleInputChange}
                      className='border p-1 w-full'
                    />
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <input
                      type='number'
                      name='matricula'
                      value={formValues.matricula}
                      onChange={handleInputChange}
                      className='border p-1 w-full'
                    />
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <select
                      name='curso'
                      value={formValues.curso}
                      onChange={handleInputChange}
                      className='border p-1 w-full'
                    >
                      <option value="">Selecione um curso</option>
                      <option value="Enfermagem">Enfermagem</option>
                      <option value="Redes">Redes</option>
                      <option value="Desenvolvimento de sistemas">Desenvolvimento de sistemas</option>
                      <option value="Hospedagem">Hospedagem</option>
                    </select>
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <select
                      name='serie'
                      value={formValues.serie}
                      onChange={handleInputChange}
                      className='border p-1 w-full'
                    >
                      <option value="">Selecione uma série</option>
                      <option value="1° ano">1° ano</option>
                      <option value="2° ano">2° ano</option>
                      <option value="3° ano">3° ano</option>
                    </select>
                  </div>

                  <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <button onClick={handleSave} className='text-green-500'> <FaCheckCircle /></button>
                    <button onClick={() => setEditingAluno(null)} className='text-red-500 ml-2'><MdCancel /></button>

                  </div>
                  <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                  <button onClick={() => handleDelete(index)} className='text-red-500'><MdDelete /></button>
                  </div>
                </>
              ) : (
                <>
                
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{aluno.nome}</p>
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{aluno.matricula}</p>
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{aluno.curso}</p>
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{aluno.serie}</p>
                  </div>
                  <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <button onClick={() => handleEdit(index)} className='text-blue-500 ml-2'><MdEdit /></button>
                  </div>
                  <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                  <button onClick={() => handleDelete(index)} className='text-red-500'><MdDelete /></button>
                  </div>
                </>
                
              )}
            </div>
          ))
        ) : (
          <div className='p-4 text-center'>
            <p className='text-[#363636]'>Nenhum aluno cadastrado.</p>
          </div>
        )
        
        
        
        }

        

      </div>
    </div>
  );
}

export default Aluno;
