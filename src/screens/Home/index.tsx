import { View, Text, ScrollView, TouchableHighlight, Image, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { Bell, Calendar, CalendarCheck, CalendarPlus, Check, ChevronLeft, ChevronRight } from 'lucide-react-native'

import { Screen } from '../../components/layout/Screen'
import { UserCard } from '../../components/widgets/UserCard'

import { THEME } from '../../configs/theme'
import { useState } from 'react'
import { Circle, Path, Rect, Svg } from 'react-native-svg'
import { ProgressChart } from 'react-native-chart-kit'

export function Home() {
  const priorityLevels: Array<{ color: string, label: string }> = [
    { color: '', label: '' },
    { color: THEME.primary.blue, label: 'Baixa' },
    { color: THEME.primary.green, label: 'Média' },
    { color: THEME.primary.yellow, label: 'Alta' },
    { color: THEME.primary.red, label: 'Urgente' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Open Task Report',
      progress: 25,
      tags: [
        'Mobile', 'App'
      ]
    },
    {
      id: 2,
      title: 'Scrum Report App',
      progress: 5,
      tags: [
        'Mobile', 'App'
      ]
    },
    {
      id: 3,
      title: 'Scrum Report API',
      progress: 0,
      tags: [
        'Backend', 'API'
      ]
    }
  ]

  const sprintProgress = 'M 50 5 A 45 45 0 0 1 95 50' // M 50 5 A 45 45 0 1 1 5 50

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Construir componentes base',
      status: 'OPENED',
      priorityLevel: 4
    },
    {
      id: 2,
      title: 'Compilar referências de UI',
      status: 'OPEN',
      priorityLevel: 3
    },
    {
      id: 3,
      title: 'Criar identidade visual',
      status: 'OPEN',
      priorityLevel: 3
    },
    {
      id: 4,
      title: 'Setup do projeto em react-native',
      status: 'DONE',
      priorityLevel: 2
    }
  ])

  function handleTasks(task: any, index: number) {
    const taskList = [...tasks]
    const currentTask = taskList[index]

    if (currentTask.status === 'OPEN') currentTask.status = 'DONE'
    else currentTask.status = 'OPEN'

    setTasks(taskList)
  }

  function taskStatus(status: string): StyleProp<ViewStyle> {
    const size = status === 'DONE' ? '100%' : '0%'
    return {
      width: size,
      zIndex: 1,
      height: '100%',
      position: 'absolute',
      backgroundColor: THEME.primary.blue + '25',
    }
  }

  function taskPriorityFlag(priorityLevel: number): StyleProp<TextStyle> {
    return {
      color: priorityLevels[priorityLevel].color,
      textAlign: 'center',
      // color: priorityLevels[priorityLevel].color,
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius: 16,
    }
  }

  return (
    <Screen>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <UserCard />
        <TouchableHighlight onPress={() => { }} style={{ padding: 8, borderRadius: 8 }}>
          <Bell size={24} color='#FFFFFF55' />
        </TouchableHighlight>
      </View>
      <View style={{ marginTop: 32 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Projetos</Text>
            <Text style={{ fontSize: 14, color: '#FFFFFF50', marginTop: 8, }}>Você participa de 3 projetos</Text>
          </View>
          <TouchableHighlight onPress={() => { }} style={{ padding: 4, borderRadius: 8 }}>
            <ChevronRight size={24} color='#FFFFFF55' />
          </TouchableHighlight>
        </View>
        <View style={{ marginTop: 16, marginHorizontal: -20 }}>
          <ScrollView showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }} horizontal>
            {
              projects.map((project) => (
                <View style={{ marginRight: 12, width: 260, padding: 20, backgroundColor: THEME.secondary.darkGray, borderRadius: 16, justifyContent: 'space-between' }} key={project.id}>
                  <View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, }}>
                      {project.tags.map((tag) => (
                        <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#FFFFFF1F', color: '#FFFFFF55', borderRadius: 16, paddingHorizontal: 6, paddingVertical: 2, }} key={tag}>{tag}</Text>
                      ))}
                    </View>
                    <View style={{ marginTop: 14, borderRadius: 8, overflow: 'hidden', backgroundColor: '#FFFFFF05' }}>
                      <View style={{ height: 8, width: `${project.progress}%`, backgroundColor: THEME.primary.blue }} />
                    </View>
                    <Text numberOfLines={3} style={{ marginVertical: 16, fontSize: 16, lineHeight: 24, color: '#FFFFFF' }}>{project.title}</Text>
                  </View>
                  <View>
                    <View style={{ marginBottom: 16, flexDirection: 'row', marginLeft: 8, }}>
                      {
                        [1, 2, 3, 4].map((user) => (
                          <Image source={require('../../../assets/jpg/default-user-profile.jpg')} style={{ borderWidth: 1, borderColor: '#FFFFFF5F', marginLeft: -8, width: 32, height: 32, borderRadius: 16 }} key={user} />
                        ))
                      }
                      <View style={{ backgroundColor: THEME.primary.yellow, marginLeft: -8, width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', }}>2+</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Calendar size={16} color='#FFFFFF26' />
                      <Text style={{ fontSize: 14, marginLeft: 4, color: '#FFFFFF', opacity: .5 }}>{new Date().toLocaleDateString()}</Text>
                    </View>
                  </View>
                </View>
              ))
            }
            <View style={{ width: 32 }} />
          </ScrollView>
        </View>
      </View >

      <View style={{ marginTop: 40, backgroundColor: THEME.secondary.darkGray, padding: 20, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: 16, color: '#FFFFFF' }}>Sprint</Text>
          <Text style={{ fontSize: 14, color: '#FFFFFF50', marginTop: 8, }}>Resumo da sprint atual</Text>
          <View style={{ marginTop: 16 }}>
            <View style={{ flexDirection: 'row', marginBottom: 8 }}>
              <CalendarPlus size={16} color='#FFFFFF50' />
              <Text style={{ color: '#FFF', marginLeft: 8, }}>{new Date().toLocaleDateString()}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <CalendarCheck size={16} color='#FFFFFF50' />
              <Text style={{ color: '#FFF', marginLeft: 8, }}>{new Date().toLocaleDateString()}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 110, height: 110, borderRadius: 55, overflow: 'hidden', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
            <ProgressChart data={[0.25]} width={110} height={110} hideLegend radius={42} chartConfig={{
              // backgroundGradientFrom: THEME.secondary.dark,
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              color: (opacity = 1) => `rgba(43, 204, 86, ${opacity})`,
            }} />
            <Text style={{ position: 'absolute', color: '#FFF' }}>25/100</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 40, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 16, color: '#FFFFFF' }}>Tarefas do dia</Text>
            <Text style={{ fontSize: 14, color: '#FFFFFF50', marginTop: 8, }}>Você tem 4 tarefas pendentes</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* <TouchableHighlight onPress={() => { }} style={{ padding: 4, borderRadius: 8 }}>
              <ChevronLeft size={24} color='#FFFFFF55' />
            </TouchableHighlight>
            <Text style={{ color: '#FFFFFF', fontSize: 16, marginHorizontal: 8, }}>{new Date().getDate()}</Text> */}
            <TouchableHighlight onPress={() => { }} style={{ padding: 4, borderRadius: 8 }}>
              <ChevronRight size={24} color='#FFFFFF55' />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.taskList}>
          {
            tasks.map((task, index) => (
              <View style={styles.taskContainer} key={task.id}>
                <>
                  <View style={styles.taskView}>
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.taskPriorityFlag}>{new Date().toLocaleDateString()}</Text>
                        <Text style={taskPriorityFlag(task.priorityLevel)}>{priorityLevels[task.priorityLevel].label}</Text>
                      </View>
                      <Text style={styles.taskTitle}>{task.title}</Text>
                    </View>
                    <TouchableHighlight onPress={() => { handleTasks(task, index) }} style={styles.taskCheckButton}>
                      {task.status === 'DONE' ? <Check size={16} strokeWidth={3} color='#FFFFFF' /> : <></>}
                    </TouchableHighlight>
                  </View>
                  <View style={taskStatus(task.status)} />
                </>
              </View>
            ))
          }
        </View>
      </View>
    </Screen >
  )
}

const styles = StyleSheet.create({
  taskList: {
    gap: 8,
    marginTop: 16,
  },
  taskContainer: {
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: THEME.secondary.darkGray,
  },
  taskView: {
    zIndex: 2,
    padding: 20,
    paddingTop: 16,
    paddingBottom: 16,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskCheckButton: {
    width: 20,
    height: 20,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF09',
  },
  taskTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
  taskPriorityFlag: {
    color: '#FFFFFF5f',
    marginRight: 8,
    fontSize: 12,
  }
})