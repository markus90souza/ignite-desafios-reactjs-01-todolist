import { useState } from 'react'
import { Header } from './components/Header'
import { ITask, Tasks } from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  const addTask = (title: string) => {
    if (title.trim().length === 0) {
      return
    }
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title,
        isDone: false,
      },
    ])
  }

  const removeTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const toggleTaskById = (id: string) => {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }

      return task
    })

    setTasks(newTask)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks data={tasks} onRemove={removeTask} onCompleted={toggleTaskById} />
    </>
  )
}

export default App
