import { Container } from './styles'

import logo from './../../assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'

type Props = {
  onAddTask: (title: string) => void
}
export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  const handleSubmitCreateTask = (e: FormEvent) => {
    e.preventDefault()
    onAddTask(title)
    setTitle('')
  }
  return (
    <Container>
      <img src={logo} alt="Foguete com o nome todo" />

      <form onSubmit={handleSubmitCreateTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => onAddTask}>
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </Container>
  )
}
