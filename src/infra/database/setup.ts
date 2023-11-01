import * as Sqlite from 'expo-sqlite'
import { projectSchema, sprintSchema, taskSchema, userSchema } from './schemas'

export const db = Sqlite.openDatabase('opentaskreport.db', '1.0.0')

export function init() {
  try {
    db.transactionAsync(async (tx) => {
      tx.executeSqlAsync(`
        ${userSchema}
      `)
      tx.executeSqlAsync(`
        ${projectSchema}
      `)
      tx.executeSqlAsync(`
        ${taskSchema}
      `)
      tx.executeSqlAsync(`
        ${sprintSchema}
      `)
    })
  } catch (e) {
    sqlError(e)
  }
}

function sqlError(e: any) {
  console.log(e)
  throw new Error(e)
}
