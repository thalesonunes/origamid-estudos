import React from "react";
import Header from "./exe03/Header";
import Home from "./exe03/Home";
import Produtos from "./exe03/Produtos";
import Produto from "./exe04/Produto";


// EXERCÍCIO 01

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [{
//       nome: 'Notebook',
//       preco: 'R$ 2500'
//     },
//     {
//       nome: 'Geladeira',
//       preco: 'R$ 3000'
//     },
//     {
//       nome: 'Smartphone',
//       preco: 'R$ 1500'
//     },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [{
//       nome: 'Notebook',
//       preco: 'R$ 2500'
//     },
//     {
//       nome: 'Geladeira',
//       preco: 'R$ 3000'
//     },
//     {
//       nome: 'Smartphone',
//       preco: 'R$ 1500'
//     },
//     {
//       nome: 'Guitarra',
//       preco: 'R$ 3500'
//     },
//   ],
//   ativa: false,
// };

// const App = () => {
//   const dados = mario;

//   const total = dados.compras
//     .map((item) => Number(item.preco.replace('R$ ', '')))
//     .reduce((a, b) => a + b);

//   return ( 
//     <>
//       <p> Nome: {dados.cliente} </p>
//       <p> Idade: {dados.idade}</p>  
//       <p> Situação:{" "}
//         <span style={{ color: dados.ativa ? 'green' : 'red' }}>
//           {dados.ativa ? "Ativa" : "Inativa"}
//         </span>
//       </p>
//       <p> Total gasto: R$ {total}</p>
//       {total > 10000 && <p>Você está gastando muito!</p> }
//     </>
//   );
// };



// EXERCÍCIO 02

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500

// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const App = () => {

//   const dados = produtos.filter(
//     ({preco}) => Number(preco.replace("R$ ", "")) > 1500);

//   return <section>
//     {dados.map(({id, nome, preco, cores}) => 
//     <div key={id}>
//       <h1>{nome}</h1>
//       <p>Preço: {preco}</p>
//       <ul>
//       {cores.map((cor) => (
//           <li key={cor} style={{ backgroundColor: cor, color: 'white', listStyleType: "none" }}>
//             {cor}
//           </li>
//         ))}
//       </ul>
//     </div> )}
//   </section>;
// };


// EXERCÍCIO 03

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

// const App = () => {

//   let Pagina = Home;
//   const {pathname} = window.location;

//   if(pathname === "/produtos"){
//     Pagina = Produtos;
//   }else{
//     Pagina = Home;
//   }

//   return ( 
//     <>
//       <Header />
//       <Pagina />
//     </>
//   );
// };


// AULA
// const App = () => {
//   const [ativo, setAtivo] = React.useState(true);

//   return (
//     <button onClick={() => setAtivo(!ativo)}>
//       {ativo ? 'Botão Ativo' : 'Botão Inativo'}
//     </button>
//   );
// };


// EXERCÍCIO 04

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button style={{margin: ".5rem"}} onClick={handleClick}>smartphone</button>
      <button style={{margin: ".5rem"}} onClick={handleClick}>tablet</button>
      <button style={{margin: ".5rem"}} onClick={handleClick}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};


// AULA
// const App = () => {
  
//   return (
//     null
//   );
// };

export default App;