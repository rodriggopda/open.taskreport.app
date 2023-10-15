import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { Bell, Calendar, Check, ChevronLeft, ChevronRight } from 'lucide-react-native'

import { Screen } from '../../components/layout/Screen'
import { UserCard } from '../../components/widgets/UserCard'

import { THEME } from '../../configs/theme'

export function Home() {
  const projects = [
    {
      id: 1,
      title: 'Construir o melhor app para gerenciamento de tarefas',
      progress: 25,
      tags: [
        'Mobile', 'App'
      ]
    },
    {
      id: 2,
      title: 'Construir o backend do app',
      progress: 5,
      tags: [
        'Backend', 'API', 'REST'
      ]
    },
    {
      id: 3,
      title: 'Deploy do backend',
      progress: 0,
      tags: [
        'Backend', 'DevOps'
      ]
    }
  ]

  const tasks = [
    {
      id: 1,
      title: 'Construir componentes base',
      status: 'CREATED'
    },
    {
      id: 2,
      title: 'Compilar referências de UI',
      status: 'CREATED'
    },
    {
      id: 3,
      title: 'Criar identidade visual',
      status: 'CREATED'
    },
    {
      id: 4,
      title: 'Setup do projeto em react-native',
      status: 'DONE'
    }
  ]

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
          <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Projetos</Text>
          <TouchableHighlight onPress={() => { }} style={{ padding: 4, borderRadius: 8 }}>
            <ChevronRight size={24} color='#FFFFFF55' />
          </TouchableHighlight>
        </View>
        <View style={{ marginTop: 16, marginHorizontal: -20 }}>
          <ScrollView showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }} horizontal>
            {
              projects.map((project) => (
                <View style={{ marginRight: 12, width: 260, padding: 20, backgroundColor: '#1F1F1F', borderRadius: 8, justifyContent: 'space-between' }} key={project.id}>
                  <View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, }}>
                      {project.tags.map((tag) => (
                        <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#FFFFFF1F', color: '#FFFFFF55', borderRadius: 16, paddingHorizontal: 6, paddingVertical: 2, }} key={tag}>{tag}</Text>
                      ))}
                    </View>
                    <View style={{ marginTop: 14, borderRadius: 8, overflow: 'hidden', backgroundColor: '#FFFFFF05' }}>
                      <View style={{ height: 8, width: `${project.progress}%`, backgroundColor: THEME.primary.success }} />
                    </View>
                    <Text numberOfLines={3} style={{ marginVertical: 16, fontSize: 16, lineHeight: 24, color: '#FFFFFF' }}>{project.title}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Calendar size={16} color='#FFFFFF26' />
                    <Text style={{ fontSize: 14, marginLeft: 4, color: '#FFFFFF', opacity: .5 }}>{new Date().toLocaleString()}</Text>
                  </View>
                </View>
              ))
            }
            <View style={{ width: 32 }} />
          </ScrollView>
        </View>
      </View >
      <View style={{ marginTop: 32, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Tarefas do dia</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableHighlight onPress={() => { }} style={{ padding: 4, borderRadius: 8 }}>
              <ChevronLeft size={24} color='#FFFFFF55' />
            </TouchableHighlight>
            <Text style={{ color: '#FFFFFF', fontSize: 16, marginHorizontal: 8, }}>{new Date().getDate()}</Text>
            <TouchableHighlight onPress={() => { }} style={{ padding: 4, borderRadius: 8 }}>
              <ChevronRight size={24} color='#FFFFFF55' />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginTop: 16, gap: 8, }}>
          {
            tasks.map((task) => (
              <TouchableHighlight style={{ overflow: 'hidden', backgroundColor: '#1F1F1F', borderRadius: 8, }} key={task.id}>
                <>
                  <View style={{ zIndex: 2, padding: 16, flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                    <View style={{ width: 24, height: 24, backgroundColor: '#FFFFFF10', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                      {task.status === 'DONE' && <Check size={18} color='#FFFFFF' />}
                    </View>
                    <Text style={{ marginLeft: 16, color: '#FFFFFF', fontSize: 16 }}>{task.title}</Text>
                  </View>
                  <View style={{ zIndex: 1, width: task.status === 'DONE' ? '100%' : '0%', height: '100%', position: 'absolute', backgroundColor: THEME.primary.success }} />
                </>
              </TouchableHighlight>
            ))
          }
        </View>
      </View>
    </Screen >
  )
}