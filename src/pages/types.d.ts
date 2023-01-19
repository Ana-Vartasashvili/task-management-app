import { Tasks } from '../types/global'

export type HomeProps = {
  tasksData: Tasks[]
  onDeleteTask: (id: string) => void
  onAddTask: (taskName: string, id: string) => void
}
