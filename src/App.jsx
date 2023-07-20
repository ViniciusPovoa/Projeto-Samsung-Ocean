import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";


//Objetos em uma lista
//const itens = [];
// const item1 = {
//   nome: "Rick Sanchez",
//   imagem:
//     "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
// };

function App() {
  //useState = Hook de Estado determina qual o estado de uma informação
  const [itens, setItens] = useState([]);
 console.log("itens", itens);

  async function carregarDadosApi() {
    const apiUrl = "https://ocean-api-itens.onrender.com/itens"
    //fetch = Promise -> toda promise deve ser resolvida para trabalhar com valor
    const response = await fetch(apiUrl);
    const body = await response.json()
    console.log(body);

    setItens(body);
  }

  //useEffect = controla uma função
  useEffect(function (){
 
    carregarDadosApi();

  }, []);

  return (
    <>
      <div className="cards-list">
        {itens.map(function (item, index) {
          return <Card key={index} item={item} />;
        })}
        {/* <Card item={item1} />
        <Card item={item2} />
        <Card item={item3} /> */}
      </div>
    </>
  );
}

export default App;