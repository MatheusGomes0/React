import { Button } from "@chakra-ui/react";
import { ITarefa } from "../../interfaces/tarefa";

interface Props {
    tarefa: ITarefa
}

export default function ItemTarefa({ tarefa }: Props) {
    return (
        <li key={tarefa.id}>
            {tarefa.nome}
            <Button colorScheme={tarefa.concluida ? 'green' : 'orange'}>
                {tarefa.concluida ? 'Realizada' : 'Pendente'}
            </Button>
        </li>
    )
}