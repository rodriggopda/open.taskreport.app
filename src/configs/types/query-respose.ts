export type QueryResponse<T> = {
  lastId: string | number | null
  data: T
  rowsAffected: number
}
