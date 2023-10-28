import { View, TouchableHighlight } from 'react-native'
import { Bell } from 'lucide-react-native'

import { Screen } from '../../components/layout/Screen'
import { UserCard } from '../../components/widgets/UserCard'

import { TaskList } from '../../components/tasks/TaskList'
import { Projects } from '../../components/projects/Projects'
import { CurrentSprint } from '../../components/sprints/CurrentSprint'

import { styles } from './styles'

export function Home() {

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
