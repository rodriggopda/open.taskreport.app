import { Calendar, ChevronRight } from "lucide-react-native";
import { Image, ScrollView, StyleProp, StyleSheet, Text, TouchableHighlight, View, ViewStyle } from "react-native";
import { THEME } from "../../configs/theme";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Open Task Report',
      progress: 40,
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

  const projectProgressBar = (progress: number): StyleProp<ViewStyle> => {
    return {
      width: `${progress}%`,
      height: 8,
      backgroundColor: THEME.primary.blue
    }
  }

  return (
    <View style={styles.projectContainer}>
      <View style={styles.projectContainerHeader}>
        <View>
          <Text style={styles.projectContainerTitle}>
            Projetos
          </Text>
          <Text style={styles.projectContainerDescription}>
            Você participa de 3 projetos
          </Text>
        </View>
        <TouchableHighlight onPress={() => { }} style={styles.projectHeaderButton}>
          <ChevronRight size={24} color='#FFFFFF55' />
        </TouchableHighlight>
      </View>
      <View style={styles.projectView}>
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollView} horizontal>
          {
            projects.map((project) => (
              <View style={styles.projectContainerCard} key={project.id}>
                <View>
                  <View style={styles.projectCardTags}>
                    {project.tags.map((tag) => (
                      <Text style={styles.projectTag} key={tag}>
                        {tag}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.projectProgress}>
                    <View style={projectProgressBar(project.progress)} />
                  </View>
                  <Text numberOfLines={3} style={styles.projectTitle}>
                    {project.title}
                  </Text>
                </View>
                <View>
                  <View style={styles.stakeHolders}>
                    {
                      [1, 2, 3, 4].map((user) => (
                        <Image
                          source={{ uri: 'https://robohash.org/' + user * Math.random() * 8 + '.png?set=set5&size=126x126' }}
                          style={styles.stakeHolderProfile} key={user} />
                      ))
                    }
                    <View style={[styles.stakeHolderCount, styles.stakeHolderProfile]}>
                      <Text style={styles.stakeHolderNumber}>
                        2+
                      </Text>
                    </View>
                  </View>
                  <View style={styles.projectDeadline}>
                    <Calendar size={16} color='#FFFFFF26' />
                    <Text style={styles.projectDeadlineDate}>
                      {new Date().toLocaleDateString()}
                    </Text>
                  </View>
                </View>
              </View>
            ))
          }
          <View style={{ width: 30 }} />
        </ScrollView>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  projectContainer: {
    marginTop: 32
  },
  projectContainerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectContainerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  projectContainerDescription: {
    color: '#FFFFFF50',
    fontSize: 14,
    marginTop: 8,
  },
  projectHeaderButton: {
    padding: 4,
    borderRadius: 8
  },
  projectView: {
    marginTop: 16,
    marginHorizontal: -20
  },
  scrollView: {
    paddingLeft: 20
  },
  projectContainerCard: {
    width: 260,
    padding: 20,
    marginRight: 12,
    borderRadius: 16,
    justifyContent: 'space-between',
    backgroundColor: THEME.secondary.darkGray,
  },
  projectCardTags: {
    gap: 6,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  projectTag: {
    color: '#FFFFFF55',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 16,
    backgroundColor: '#FFFFFF1F',
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  projectProgress: {
    overflow: 'hidden',
    marginTop: 14,
    borderRadius: 8,
    backgroundColor: '#FFFFFF05'
  },
  projectTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 16,
  },
  stakeHolders: {
    marginLeft: 8,
    marginBottom: 16,
    flexDirection: 'row',
  },
  stakeHolderProfile: {
    width: 32,
    height: 32,
    marginLeft: -8,
    borderWidth: 1,
    borderColor: '#FFFFFF5F',
    borderRadius: 16,
    backgroundColor: THEME.primary.yellow,
  },
  stakeHolderCount: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stakeHolderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectDeadline: {
    flexDirection: 'row'
  },
  projectDeadlineDate: {
    color: '#FFFFFF',
    opacity: .5,
    fontSize: 14,
    marginLeft: 4,
  }
})