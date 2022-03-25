import React from 'react'
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';


// EXERCÍCIO 03 - COMPONENTES

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
// const produtos = [
//     { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
//     { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
// ];

const Exe03 = () => {
  let Pagina = Home;
  const {pathname} = window.location;

  if(pathname === "/produtos"){
    Pagina = Produtos;
  }else{
    Pagina = Home;
  }

  return ( 
    <>
      <Header />
      <Pagina />
    </>
  );
}

export default Exe03