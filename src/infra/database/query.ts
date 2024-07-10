import { QueryResponse } from '../../configs/types/query-respose'
import { db } from './setup'

export const query = {
  exec: async <T>(query: string, args?: any): Promise<QueryResponse<T>> => {
    return queryResolve<T>(query, args)
  },
  findOne: async <T>(query: string, args?: any): Promise<{ data: T }> => {
    if (query.match(/(insert|INSERT)/)) return Promise.reject('Invalid query, use exec() method')
    const { data } = await queryResolve<T[]>(query, args)
    return { data: data[0] }
  }
}

function validateArgs(query: string, args?: any) {
  if (query.match(/\?*/g) && !args) return Promise.reject('Invalid query, verify the arguments')
  if (typeof args !== 'object') return Promise.reject('Invalid arguments, use an array')
  return
}

function queryResolve<T>(query: string, args?: any) {
  validateArgs(query, args)
  return new Promise<QueryResponse<T>>((resolve, reject) => {
    db.runAsync(`${query}`, ...(args || ''))
  })
}
