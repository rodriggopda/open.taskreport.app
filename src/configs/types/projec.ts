import { Task } from './task'

export type Project = {
  id: string
  title: string
  deadline?: Date
  tasks?: Task[]
}

export type Srint = {}
