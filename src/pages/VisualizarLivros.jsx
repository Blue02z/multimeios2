import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { FaBook } from 'react-icons/fa';
import { MdDelete, MdEdit, MdCancel } from "react-icons/md";
import { FaCheckCircle } from 'react-icons/fa';

function VisualizarLivros() {
  const [livros, setLivros] = useState([]);
  const [editingLivro, setEditingLivro] = useState(null);
  const [formValues, setFormValues] = useState({
    nome: '',
    autor: '',
    editora: '',
    isbn: '',
    genero: '',
  });

  useEffect(() => {
    // Recupera a lista de livros do localStorage quando o componente é montado
    const livrosSalvos = JSON.parse(localStorage.getItem('livros')) || [];
    setLivros(livrosSalvos);
  }, []);

  const handleDelete = (index) => {
    const updatedLivros = livros.filter((_, i) => i !== index);
    localStorage.setItem('livros', JSON.stringify(updatedLivros));
    setLivros(updatedLivros);
  };

  const handleEdit = (index) => {
    const livro = livros[index];
    setFormValues(livro);
    setEditingLivro(index);
  };

  const handleSave = () => {
    const updatedLivros = livros.map((livro, index) =>
      index === editingLivro ? formValues : livro
    );
    localStorage.setItem('livros', JSON.stringify(updatedLivros));
    setLivros(updatedLivros);
    setEditingLivro(null);
    setFormValues({
      nome: '',
      autor: '',
      editora: '',
      isbn: '',
      genero: '',
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
      <Titulo imagem={<FaBook className='w-[200px] h-[130px]' />} titulo={"Lista de livros"} />

      <div className='outline-2 rounded-[6px] flex flex-col items-center'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white font-bold text-[24px]'>Lista de Livros</h1>
        </div>
        <div className='flex font-bold'>
          <div className='w-[70px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Id</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Nome</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Autor</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Editora</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>ISBN</h1>
          </div>
          <div className='w-[170px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Gênero</h1>
          </div>
          <div className='w-[100px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Apagar</h1>
          </div>
          <div className='w-[100px] pl-2 border bg-[#F4F4F6] border-black'>
            <h1 className='text-[#363636]'>Editar</h1>
          </div>
        </div>

        {livros.length > 0 ? (
          livros.map((livro, index) => (
            <div key={index} className='flex font-medium'>
              <div className='w-[70px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                <p className='text-[#363636]'>{index + 1}</p>
              </div>
              {editingLivro === index ? (
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
                      type='text'
                      name='autor'
                      value={formValues.autor}
                      onChange={handleInputChange}
                      className='border p-1 w-full'
                    />
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <input
                      type='text'
                      name='editora'
                      value={formValues.editora}
                      onChange={handleInputChange}
                      className='border p-1 w-full'
                    />
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <input
                      type='number'
                      name='isbn'
                      value={formValues.isbn}
                      onChange={handleInputChange}
                      className='border p-1 w-full'
                    />
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <select
                      name='genero'
                      value={formValues.genero}
                      onChange={handleInputChange}
                      className='border p-1 w-full'
                    >
                      <option value="">Selecione um gênero</option>
                      <option value="Infanto juvenil">Infanto juvenil</option>
                      <option value="Teatro">Teatro</option>
                      <option value="Literatura estrangeira">Literatura estrangeira</option>
                    </select>
                  </div>
                  <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <button onClick={() => handleDelete(index)} className='text-red-500'><MdDelete /></button>
                  </div>
                  <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <button onClick={handleSave} className='text-green-500'><FaCheckCircle /></button>
                    <button onClick={() => setEditingLivro(null)} className='text-red-500 ml-2'><MdCancel /></button>
                  </div>
                </>
              ) : (
                <>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{livro.nome}</p>
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{livro.autor}</p>
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{livro.editora}</p>
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{livro.isbn}</p>
                  </div>
                  <div className='w-[170px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <p className='text-[#363636]'>{livro.genero}</p>
                  </div>
                  <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <button onClick={() => handleDelete(index)} className='text-red-500'><MdDelete /></button>
                  </div>
                  <div className='w-[100px] border bg-[#F4F4F6] border-black flex justify-center items-center'>
                    <button onClick={() => handleEdit(index)} className='text-blue-500'><MdEdit /></button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div className='p-4 text-center'>
            <p className='text-[#363636]'>Nenhum livro cadastrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisualizarLivros;
