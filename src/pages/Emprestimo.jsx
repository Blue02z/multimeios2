import React, { useEffect, useState } from 'react';
import Titulo from '../components/Titulo';
import { FaCalendarAlt } from 'react-icons/fa';

function Emprestimo() {
  const [alunos, setAlunos] = useState([]);
  const [livros, setLivros] = useState([]);
  const [filteredAlunos, setFilteredAlunos] = useState([]);
  const [filteredLivros, setFilteredLivros] = useState([]);
  const [curso, setCurso] = useState('');
  const [serie, setSerie] = useState('');
  const [searchAluno, setSearchAluno] = useState('');
  const [searchLivro, setSearchLivro] = useState('');
  const [selectedAluno, setSelectedAluno] = useState('');
  const [selectedLivro, setSelectedLivro] = useState('');
  const [dataEmprestimo, setDataEmprestimo] = useState('');
  const [dataDevolucao, setDataDevolucao] = useState('');

  useEffect(() => {
    const alunosSalvos = JSON.parse(localStorage.getItem('alunos')) || [];
    const livrosSalvos = JSON.parse(localStorage.getItem('livros')) || [];
    setAlunos(alunosSalvos);
    setLivros(livrosSalvos);
  }, []);

  useEffect(() => {
    let alunosFiltrados = [...alunos];
    if (curso) {
      alunosFiltrados = alunosFiltrados.filter(aluno => aluno.curso === curso);
    }
    if (serie) {
      alunosFiltrados = alunosFiltrados.filter(aluno => aluno.serie === serie);
    }
    alunosFiltrados = alunosFiltrados.filter(aluno => aluno.nome.toLowerCase().includes(searchAluno.toLowerCase()));
    setFilteredAlunos(alunosFiltrados);
  }, [curso, serie, searchAluno, alunos]);

  useEffect(() => {
    const livrosFiltrados = livros.filter(livro => livro.nome.toLowerCase().includes(searchLivro.toLowerCase()));
    setFilteredLivros(livrosFiltrados);
  }, [searchLivro, livros]);

  const handleCadastrar = () => {
    if (!selectedAluno || !selectedLivro || !dataEmprestimo || !dataDevolucao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    
    const alunoSelecionado = alunos.find(aluno => aluno.nome === selectedAluno);
    const cursoSelecionado = alunoSelecionado ? alunoSelecionado.curso : '';
    const serieSelecionada = alunoSelecionado ? alunoSelecionado.serie : '';
  
    const novoEmprestimo = {
      aluno: selectedAluno,
      livro: selectedLivro,
      dataEmprestimo,
      dataDevolucao,
      curso: cursoSelecionado, 
      serie: serieSelecionada  
    };
  
    const emprestimosSalvos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    emprestimosSalvos.push(novoEmprestimo);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimosSalvos));
  
    alert('Empréstimo cadastrado com sucesso!');
    
   
    setSelectedAluno('');
    setSelectedLivro('');
    setDataEmprestimo('');
    setDataDevolucao('');
  };
  

  return (
    <div>
      <Titulo imagem={<FaCalendarAlt className='w-[200px] h-[130px]' />} titulo={"Emprestar livros"} />
      
      <div className='justify-center items-center flex flex-col'>
        <div className='flex justify-center flex-wrap items-center gap-3'>
          <div>
            <span><p className='font-bold text-[16px]'>Aluno</p></span>
            <input
              type='text'
              placeholder='Buscar aluno'
              value={searchAluno}
              onChange={(e) => setSearchAluno(e.target.value)}
              className='w-[220px] h-[40px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6] p-2'
            />
            <select
              className='w-[220px] h-[40px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'
              value={selectedAluno}
              onChange={(e) => setSelectedAluno(e.target.value)}
            >
              <option value="">Selecionar aluno</option>
              {filteredAlunos.map((aluno, index) => (
                <option key={index} value={aluno.nome}>{aluno.nome}</option>
              ))}
            </select>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Curso</p></span>
            <select onChange={(e) => setCurso(e.target.value)} className='w-[120px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <option value="">Curso</option>
              <option value="Enfermagem">Enfermagem</option>
              <option value="Redes">Redes</option>
              <option value="Desenvolvimento de sistemas">Desenvolvimento de sistemas</option>
              <option value="Hospedagem">Hospedagem</option>
            </select>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Série</p></span>
            <select onChange={(e) => setSerie(e.target.value)} className='w-[120px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <option value="">Série</option>
              <option value="1° ano">1° ano</option>
              <option value="2° ano">2° ano</option>
              <option value="3° ano">3° ano</option>
            </select>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Livro</p></span>
            <input
              type='text'
              placeholder='Buscar livro'
              value={searchLivro}
              onChange={(e) => setSearchLivro(e.target.value)}
              className='w-[220px] h-[40px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6] p-2'
            />
            <select
              className='w-[220px] h-[40px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'
              value={selectedLivro}
              onChange={(e) => setSelectedLivro(e.target.value)}
            >
              <option value="">Selecionar livro</option>
              {filteredLivros.map((livro, index) => (
                <option key={index} value={livro.nome}>{livro.nome}</option>
              ))}
            </select>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Data de empréstimo</p></span>
            <div className='w-[150px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <input
                className='px-2 w-[150px] h-[40px] bg-transparent'
                type="date"
                value={dataEmprestimo}
                onChange={(e) => setDataEmprestimo(e.target.value)}
              />
            </div>
          </div>

          <div>
            <span><p className='font-bold text-[16px]'>Prazo de entrega</p></span>
            <div className='w-[150px] bg-[#D1D1D1] rounded-[6px] border-2 border-[#A6A6A6]'>
              <input
                className='px-2 w-[150px] h-[40px] bg-transparent'
                type="date"
                value={dataDevolucao}
                onChange={(e) => setDataDevolucao(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div
          onClick={handleCadastrar}
          className='w-[180px] rounded-[6px] h-[65px] bg-[#1F7122] flex justify-center items-center hover:cursor-pointer hover:bg-[#155d15] mt-[180px]'
        >
          <h2 className='text-white text-[24px] font-bold'>Cadastrar</h2>
        </div>
      </div>
    </div>
  );
}

export default Emprestimo;
