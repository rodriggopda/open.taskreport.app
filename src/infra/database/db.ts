import * as Sqlite from 'expo-sqlite'

export const db = Sqlite.openDatabase('opentaskreport.db', '1.0.0')

try {
  db.transaction((tx => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS User (
        id VARCHAR(36) NOT NULL,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY id
      )
    `)
  }))
} catch (e) {
  sqlError(e)
}

function sqlError(e: any) {
  console.log(e)
  throw new Error(e)
}