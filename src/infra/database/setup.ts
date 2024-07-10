import * as Sqlite from 'expo-sqlite'
import { projectSchema, sprintSchema, taskSchema, userSchema } from './schemas'

export const db = Sqlite.openDatabaseSync('opentaskreport.db')

export function init() {
  try {
    db.execAsync(`
      ${userSchema}
      ${projectSchema}
      ${taskSchema}
      ${sprintSchema}
    `)
  } catch (e) {
    sqlError(e)
  }
}

function sqlError(e: any) {
  console.log(e)
  throw new Error(e)
}
