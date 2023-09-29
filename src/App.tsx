
import './App.css'
import ButtonFatec from './components/ButtonFatec'
function App() {

  return (
    <>
      <div>
        <h1>Entre em contato</h1>
        <ButtonFatec type='button' label='Enviar mensagem' />
        <hr />
        <InputNome type='' placeholder='Nome' />
        <InputEmail type='' placeholder='Nome' />
        <InputTel type='' placeholder='Nome' />
      </div>
    </>
  )
}

export default App
