
import { Link } from "react-router-dom";
import ButtonFatec from './components/ButtonFatec'

export default function Contato(){

  return (
    <>
      <div>
        <h1>Entre em contato</h1>
        <ButtonFatec type='button' label='Enviar mensagem' />
        <hr />
        <InputNome type='' placeholder='Nome' />
        <InputEmail type='' placeholder='Nome' />
        <InputTel type='' placeholder='Nome' />
        <hr />
        <Link to='/'>Página inicial</Link>
      </div>
    </>
  )
}
