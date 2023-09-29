import ButtonFatec from "../../components/ButtonFatec";
import { Link } from "react-router-dom";

export default function Home(){
  return(
    <>
    <div>
    <h1>
      Olá, seja bem vindo a nossa página
    </h1>
    <p>Esse é o nosso projeto, estamos aprendendo um pouco de react e testando</p>
    <p>Para saber mais basta clicar nos links</p>
    <hr />
    <Link to='/sobre'>Sobre</Link>
    <hr />
    <Link to='/contato'>Contato</Link>
    <hr />
    <Link to='/tarefas'>Tarefas</Link>
    </div>
    </>
  )
}