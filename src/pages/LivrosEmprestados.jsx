import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaSave, FaCalendarAlt } from 'react-icons/fa';
import Titulo from '../components/Titulo';
function LivrosEmprestados() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formValues, setFormValues] = useState({
    aluno: '',
    curso: '',
    serie: '',
    livro: '',
    dataEmprestimo: '',
    dataDevolucao: '',
  });

  useEffect(() => {
    const emprestimosSalvos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    setEmprestimos(emprestimosSalvos);
  }, []);

  const handleEdit = (id) => {
    const emprestimo = emprestimos.find(e => e.id === id);
    setFormValues(emprestimo);
    setEditingId(id);
  };

  const handleSave = () => {
    const updatedEmprestimos = emprestimos.map(e =>
      e.id === editingId ? { ...e, ...formValues } : e
    );
    localStorage.setItem('emprestimos', JSON.stringify(updatedEmprestimos));
    setEmprestimos(updatedEmprestimos);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updatedEmprestimos = emprestimos.filter(e => e.id !== id);
    localStorage.setItem('emprestimos', JSON.stringify(updatedEmprestimos));
    setEmprestimos(updatedEmprestimos);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const calcularDiasRestantes = (dataDevolucao) => {
    const hoje = new Date();
    const devolucao = new Date(dataDevolucao);
    const diff = devolucao - hoje;
    const diasRestantes = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return diasRestantes < 0 ? 0 : diasRestantes; // Não permitir valores negativos
  };

  return (
    <div className='flex justify-center items-center flex-col'>
    <Titulo imagem={<FaCalendarAlt className='w-[200px] h-[130px]' />} titulo={"Emprestar livros"} />
      <div className='mt-4'>
        <div className='flex font-bold'>
          {/* Cabeçalho */}
          <div className='w-[80px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>ID</h1></div>
          <div className='w-[150px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>Aluno</h1></div>
          <div className='w-[100px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>Curso</h1></div>
          <div className='w-[100px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>Série</h1></div>
          <div className='w-[150px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>Livro</h1></div>
          <div className='w-[150px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>Data Emprestimo</h1></div>
          <div className='w-[150px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>Data Devolução</h1></div>
          <div className='w-[150px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>Dias Restantes</h1></div>
          <div className='w-[120px] pl-2 border bg-[#F4F4F6] border-black'><h1 className='text-[#363636]'>Ações</h1></div>
        </div>

        {emprestimos.length > 0 ? (
          emprestimos.map((emprestimo, index) => (
            <div key={index} className='flex font-medium'>
              {}
              <div className='w-[80px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                <p className='text-[#363636]'>{index+1}</p>
              </div>
              <div className='w-[150px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                {editingId === emprestimo.id ? (
                  <input
                    type='text'
                    name='aluno'
                    value={formValues.aluno}
                    onChange={handleInputChange}
                    className='border p-1 w-full'
                  />
                ) : (
                  <p className='text-[#363636]'>{emprestimo.aluno}</p>
                )}
              </div>
              <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                {editingId === emprestimo.id ? (
                  <input
                    type='text'
                    name='curso'
                    value={formValues.curso}
                    onChange={handleInputChange}
                    className='border p-1 w-full'
                  />
                ) : (
                  <p className='text-[#363636]'>{emprestimo.curso}</p>
                )}
              </div>
              <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                {editingId === emprestimo.id ? (
                  <input
                    type='text'
                    name='serie'
                    value={formValues.serie}
                    onChange={handleInputChange}
                    className='border p-1 w-full'
                  />
                ) : (
                  <p className='text-[#363636]'>{emprestimo.serie}</p>
                )}
              </div>
              <div className='w-[150px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                {editingId === emprestimo.id ? (
                  <input
                    type='text'
                    name='livro'
                    value={formValues.livro}
                    onChange={handleInputChange}
                    className='border p-1 w-full'
                  />
                ) : (
                  <p className='text-[#363636]'>{emprestimo.livro}</p>
                )}
              </div>
              <div className='w-[150px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                {editingId === emprestimo.id ? (
                  <input
                    type='date'
                    name='dataEmprestimo'
                    value={formValues.dataEmprestimo}
                    onChange={handleInputChange}
                    className='border p-1 w-full'
                  />
                ) : (
                  <p className='text-[#363636]'>{new Date(emprestimo.dataEmprestimo).toLocaleDateString()}</p>
                )}
              </div>
              <div className='w-[150px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                {editingId === emprestimo.id ? (
                  <input
                    type='date'
                    name='dataDevolucao'
                    value={formValues.dataDevolucao}
                    onChange={handleInputChange}
                    className='border p-1 w-full'
                  />
                ) : (
                  <p className='text-[#363636]'>{new Date(emprestimo.dataDevolucao).toLocaleDateString()}</p>
                )}
              </div>
              <div className='w-[150px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                <p className='text-[#363636]'>{calcularDiasRestantes(emprestimo.dataDevolucao)} dias</p>
              </div>
              <div className='w-[120px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                {editingId === emprestimo.id ? (
                  <>
                    <button onClick={handleSave} className='text-green-500 mx-2'>
                      <FaSave />
                    </button>
                    <button onClick={() => setEditingId(null)} className='text-gray-500'>
                      <FaTrash />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(emprestimo.id)} className='text-blue-500 mx-2'>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(emprestimo.id)} className='text-red-500'>
                      <FaTrash />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className='p-4 text-center'>
            <p className='text-[#363636]'>Nenhum empréstimo registrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LivrosEmprestados;
