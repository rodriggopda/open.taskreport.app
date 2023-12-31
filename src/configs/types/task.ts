export type Task = {
  id: string
  title: string
  description?: string
  status: string
  priorityLevel: number
  startAt?: Date
  endAt?: Date
}
