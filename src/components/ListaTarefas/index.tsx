import { Button } from "@chakra-ui/react"
import { ITarefa } from "../../interfaces/tarefa"

interface Props {
    tarefas: ITarefa[]
    remover: (id: number) => void
}

export default function ListaTarefas({ tarefas, remover }: Props) {
    return (
        <ul>
            {
                tarefas.map((tarefa) => (
                    <li>
                        {tarefa.nome}
                        <Button colorScheme={tarefa.concluida ? 'green' : 'orange'}>
                            {tarefa.concluida ? 'Realizada' : 'Pendente'}
                        </Button>
                        <Button colorScheme='red' onClick={() => {
                            remover(tarefa.id)
                        }}>
                            Excluir
                        </Button>
                    </li>
                ))
            }
        </ul>
    )
}