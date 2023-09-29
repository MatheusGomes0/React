import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <h1>Página não encontrada</h1>
    <p>
      A página que voce quer acessar não existe.
    </p>
    <hr />
    <Link to='/'> Página inicial</Link>
    </>
  )
}