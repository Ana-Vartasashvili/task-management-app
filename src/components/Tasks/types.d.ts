import { Tasks } from '../../types/global'

export type TaskListProps = {
  onDeleteTask: (id: string) => void
}

export type TaskListItemProps = {
  name: string
  id: string
  key: string
  onDeleteTask: (id: string) => void
}
