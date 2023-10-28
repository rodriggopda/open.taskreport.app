import { db } from './db'

export const exec = {
  transaction: (query: string, args: string[] | number[] | boolean) => {
    return {}
  },
  query: async  (query: string, args: any) => {
    const result = await db.execAsync([
        { sql: query, args: [...args] }
      ], false)
      .then((result) => result)
      .catch((reason) => console.log(reason))

    return {
      result
    }
  }
}