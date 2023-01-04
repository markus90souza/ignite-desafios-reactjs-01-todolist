import { Container } from './styles'
import { Task } from './Task'

export type ITask = {
  id: string
  title: string
  isDone: boolean
}

type Props = {
  data: ITask[]
  onRemove: (id: string) => void
  onCompleted: (id: string) => void
}

export const Tasks = ({ data, onRemove, onCompleted }: Props) => {
  const totalTasks = data.length
  const isDone = data.filter((task) => task.isDone).length

  return (
    <Container>
      <header>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{totalTasks}</span>
        </div>

        <div>
          <strong className="purple">Concluidas</strong>
          <span>
            {isDone} de {totalTasks}
          </span>
        </div>
      </header>

      {data.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onRemove}
          onCompleted={onCompleted}
        />
      ))}
    </Container>
  )
}
