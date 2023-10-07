import { Button, Container, Input } from "@chakra-ui/react"
import Layout from "../../components/Layout"
import { useState } from "react"
import { ITarefa } from "../../interfaces/tarefa"
import ItemTarefa from "../../components/ItemTarefa"
import ListaTarefas from "../../components/ListaTarefas"

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    { id: 1, nome: "tarefa1", concluida: false },
    { id: 2, nome: "tarefa2", concluida: false },
    { id: 3, nome: "tarefa3", concluida: true },
    { id: 4, nome: "teste tarefa", concluida: false },
  ])

  const [inputNome, setInputNome] = useState('')

  function adicionarTarefa() {
    if (tarefas.length > 0) {
      const ultimoId = tarefas[tarefas.length - 1].id
      const novaTarefa: ITarefa = {
        id: ultimoId + 1,
        nome: inputNome,
        concluida: false
      }
      setTarefas([...tarefas, novaTarefa]) //spread

    }
  }


  function removerTarefa(id: number) {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id != id)
    setTarefas(novasTarefas)
  }


  return (
    <Layout>
      <Container maxWidth='container.lg'>
        <h1>Lista de tarefas</h1>
        <Input type="text"
          onChange={(evento) => setInputNome(evento.target.value)}
          value={inputNome} />

        <Button onClick={adicionarTarefa}
          colorScheme="blue">Adicionar</Button>
        <hr />
        <ListaTarefas 
        tarefas={tarefas} 
        remover={removerTarefa} />
        <Button>Mudar tarefas</Button>
      </Container>
    </Layout>
  )
}