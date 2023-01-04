import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ITask } from '..'
import { CheckedIcon } from '../../Icons/Ckecked'
import { UnCheckedIcon } from '../../Icons/UnCkecked'

import { CkeckboxContainer, Container } from './styles'

type Props = {
  task: ITask
  onDelete: (id: string) => void
  onCompleted: (id: string) => void
}

export function Task({ task, onDelete, onCompleted }: Props) {
  const { colors } = useTheme()

  return (
    <Container isDone={task.isDone}>
      <div>
        <CkeckboxContainer onClick={() => onCompleted(task.id)}>
          {task.isDone ? <CheckedIcon /> : <UnCheckedIcon />}
        </CkeckboxContainer>

        <span>{task.title}</span>

        <button onClick={() => onDelete(task.id)}>
          <Trash size={20} color={colors.gray300} />
        </button>
      </div>
    </Container>
  )
}
