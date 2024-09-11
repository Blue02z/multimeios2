import './App.css'
import { Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial'
import axios from 'axios';
import TelaCadastrarAlunos from './pages/TelaCadastrarAlunos';
import TelaCadastrarLivros from './pages/TelaCadastrarLivros';
import VisualizarLivros from './pages/VisualizarLivros';
import TelaVisualizarLivros from './pages/TelaVisualizarLivros';
import TelaEmprestimo from './pages/TelaEmprestimo';
import TelaAluno from './pages/TelaAluno';
import TelaLivrosEmprestados from './pages/TelaLivrosEmprestados';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastrarlivros" element={<TelaCadastrarLivros />} />
      <Route path="/cadastraraluno" element={<TelaCadastrarAlunos />} />
      <Route path="/visualizarlivros" element={<TelaVisualizarLivros />} />
      <Route path="/emprestarlivro" element={<TelaEmprestimo />} />
      <Route path="/visualizaralunos" element={<TelaAluno />} />
      <Route path="/livrosemprestados" element={<TelaLivrosEmprestados />} />

    </Routes>
    </>
  )
}

export default App
