import { useState } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableHighlight, View, ViewStyle } from "react-native"
import { ChevronRight } from "lucide-react-native";
import { THEME } from "../../configs/theme";
import { Task } from "../../types/task";

export type TaskListProps = {
  tasks: Task[];
}

export function TaskList() {
  const [translateX, setTranslateX] = useState(0)

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Construir componentes base',
      status: 'OPENED',
      priorityLevel: 4
    },
    {
      id: '2',
      title: 'Compilar referências de UI',
      status: 'OPEN',
      priorityLevel: 3
    },
    {
      id: '3',
      title: 'Criar identidade visual',
      status: 'OPEN',
      priorityLevel: 3
    },
    {
      id: '4',
      title: 'Setup do projeto em react-native',
      status: 'OPEN',
      priorityLevel: 2
    }
  ])

  const priorityLevels: Array<{ color: string, label: string }> = [
    { color: '', label: '' },
    { color: THEME.primary.blue, label: 'Baixa' },
    { color: THEME.primary.green, label: 'Média' },
    { color: THEME.primary.yellow, label: 'Alta' },
    { color: THEME.primary.red, label: 'Urgente' },
  ]

  const taskStatus = (status: string): StyleProp<ViewStyle> => {
    const size = status === 'DONE' ? '100%' : '0%'
    return {
      width: size,
      zIndex: 1,
      height: '100%',
      position: 'absolute',
      backgroundColor: THEME.primary.blue + '25',
    }
  }

  const taskPriorityFlag = (priorityLevel: number): StyleProp<TextStyle> => {
    return {
      color: priorityLevels[priorityLevel].color,
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius: 16,
    }
  }

  function handleTasks(task: Task, index: number) {
    const taskList = [...tasks]
    const currentTask = taskList[index]

    if (currentTask.status === 'OPEN') currentTask.status = 'DONE'
    else currentTask.status = 'OPEN'

    setTasks(taskList)
  }

  function handleDisplayActions() {
    setTranslateX(-100)
  }

  const taskContainer = (): StyleProp<ViewStyle> => {
    return {
      // transform: [{ translateX }],
      overflow: 'hidden',
      borderRadius: 16,
      backgroundColor: THEME.secondary.darkGray,
    }
  }

  return (
    <View style={styles.taskListContainer}>
      <View style={styles.taskListContainerHeader}>
        <View>
          <Text style={styles.taskListTitle}>
            Tarefas do dia
          </Text>
          <Text style={styles.taskListDescription}>
            Você tem 4 tarefas pendentes
          </Text>
        </View>
        <TouchableHighlight onPress={() => { }} style={styles.taskListHeaderButton}>
          <ChevronRight size={24} color='#FFFFFF55' />
        </TouchableHighlight>
      </View>
      <View style={styles.taskList}>
        {
          tasks.map((task, index) => (
            <View onTouchMove={() => handleDisplayActions()} style={taskContainer()} key={task.id}>
              <>
                <View style={styles.taskView}>
                  <View>
                    <View style={styles.taskDateAndPriority}>
                      <Text style={styles.taskDate}>{new Date().toLocaleDateString()}</Text>
                      <Text style={taskPriorityFlag(task.priorityLevel)}>{priorityLevels[task.priorityLevel].label}</Text>
                    </View>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                  </View>
                  {/* <TouchableHighlight onPress={() => { handleTasks(task, index) }} style={styles.taskCheckButton}>
                    {task.status === 'DONE' ? <Check size={16} strokeWidth={3} color='#FFFFFF' /> : <></>}
                  </TouchableHighlight> */}
                </View>
                <View style={taskStatus(task.status)} />
              </>
            </View>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskListContainer: {
    marginTop: 40,
  },
  taskListContainerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskListHeaderButton: {
    padding: 4,
    borderRadius: 8,
  },
  taskListTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  taskListDescription: {
    color: '#FFFFFF50',
    fontSize: 14,
    marginTop: 8,
  },
  taskList: {
    gap: 8,
    marginTop: 16,
  },
  /* taskContainer: {
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: THEME.secondary.darkGray,
  }, */
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
  taskDateAndPriority: {
    flexDirection: 'row'
  },
  taskDate: {
    color: '#FFFFFF5f',
    marginRight: 8,
    fontSize: 14,
  }
})