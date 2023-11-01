import { useEffect } from 'react'
import { View, TouchableHighlight } from 'react-native'
import { Bell } from 'lucide-react-native'

import { Screen } from '../../components/layout/Screen'
import { UserCard } from '../../components/widgets/UserCard'

import { TaskList } from '../../components/tasks/TaskList'
import { Projects } from '../../components/projects/Projects'
import { CurrentSprint } from '../../components/sprints/CurrentSprint'

import { styles } from './styles'
import { query } from '../../infra/database/query'
import { Task } from '../../configs/types/task'

export function Home() {

  useEffect(() => {
    /* query.exec('INSERT INTO User (id, name, username) VALUES (?,?,?)', ['655e57b3-2864-4c36-a876-ca437fe58902', 'Rodrigo Andrade', 'rodriggopda']).then(({ lastId, rowsAffected }) => {
      console.log('query insert response ', { lastId, rowsAffected })
    }) */

    query.exec<Task[]>('SELECT * FROM Task WHERE id = ?', [1]).then(({ data }) => {
      console.log('tasks', data)
    })
  }, [])

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <UserCard />
        <TouchableHighlight onPress={() => { }} style={styles.alertButton}>
          <Bell size={24} color='#FFFFFF55' />
        </TouchableHighlight>
      </View>
      <Projects />
      <CurrentSprint />
      <TaskList />
    </Screen >
  )
}
