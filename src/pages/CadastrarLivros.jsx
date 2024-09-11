import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { FaBookMedical } from 'react-icons/fa';

function CadastrarLivros() {
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [isbn, setIsbn] = useState('');
  const [genero, setGenero] = useState('');

  const cadastrarLivro = () => {
    // Verifica se todos os campos estão preenchidos
    if (!nome || !autor || !editora || !isbn || !genero) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Cria um objeto livro
    const novoLivro = { nome, autor, editora, isbn, genero };

    // Obtém a lista de livros do localStorage
    const livrosSalvos = JSON.parse(localStorage.getItem('livros')) || [];
    livrosSalvos.push(novoLivro);

    // Salva a lista de livros no localStorage
    localStorage.setItem('livros', JSON.stringify(livrosSalvos));

    // Limpa os campos do formulário
    setNome('');
    setAutor('');
    setEditora('');
    setIsbn('');
    setGenero('');

    alert('Livro cadastrado com sucesso!');
  };

  return (
    <div>
      <NavBar />
      <Titulo imagem={<FaBookMedical className='w-[200px] h-[130px]' />} titulo={"Cadastrar livros"} />

      <div className='justify-center items-center flex flex-col'>
        <div className='flex justify-center gap-3 flex-wrap items-center'>
          <div>
            <span><p className='font-bold text-[16px]'>Nome</p></span>
            <div className='w-[250px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className='px-2 w-[250px] h-[40px] bg-transparent'
                type="text"
              />
            </div>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Autor</p></span>
            <div className='w-[250px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <input
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                className='px-2 w-[250px] h-[40px] bg-transparent'
                type="text"
              />
            </div>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Editora</p></span>
            <div className='w-[250px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <input
                value={editora}
                onChange={(e) => setEditora(e.target.value)}
                className='px-2 w-[250px] h-[40px] bg-transparent'
                type="text"
              />
            </div>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>ISBN</p></span>
            <div className='w-[250px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <input
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                className='px-2 w-[250px] h-[40px] bg-transparent'
                type="number"
              />
            </div>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Gênero</p></span>
            <select
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              className='w-[250px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'
            >
              <option value="">Selecione um gênero</option>
              <option value="Infanto juvenil">Infanto juvenil</option>
              <option value="Teatro">Teatro</option>
              <option value="Literatura estrangeira">Literatura estrangeira</option>
            </select>
          </div>
        </div>

        <div
          className='w-[180px] rounded-[6px] h-[65px] bg-[#1F7122] flex justify-center items-center hover:cursor-pointer hover:bg-[#1F7122] mt-[20px]'
          onClick={cadastrarLivro}
        >
          <h2 className='text-white text-[24px] font-bold'>Cadastrar</h2>
        </div>
      </div>
    </div>
  );
}

export default CadastrarLivros;
