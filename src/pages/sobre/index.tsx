import { Link } from "react-router-dom";

export default function Sobre(){
  return (
    <>
    <h1>Sobre</h1>
    <p>Me chamo Matheus Bertolino Gomes, sou estudante de ADS na fatec
      Atualmente estou no 4° semestre e desenvolvi essa página para praticar.
    </p>
    <hr />
<Link to='/'>Página inicial</Link>
    </>
  )
}