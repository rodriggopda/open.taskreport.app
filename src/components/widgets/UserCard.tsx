import { View, Image, Text, StyleSheet } from 'react-native'
import { THEME } from '../../configs/theme'

export function UserCard() {

  function currentPeriod() {
    const currentHour = new Date().getHours()
    if (currentHour >= 0 && currentHour < 12) return 'Bom dia,'
    if (currentHour >= 12 && currentHour < 18) return 'Boa tarde,'
    if (currentHour >= 18 && currentHour < 24) return 'Boa noite,'
  }

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.profile} source={require('../../../assets/jpg/default-user-profile.jpg')} />
      <View style={styles.indicator} />
      <View>
        <Text style={styles.basicText}>{currentPeriod()}</Text>
        <Text style={styles.userNameText}>Rodrigo Andrade</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    top: 40,
    left: 46,
    width: 12,
    height: 12,
    position: 'absolute',
    borderWidth: 2,
    borderColor: THEME.secondary.dark,
    borderRadius: 8,
    backgroundColor: THEME.primary.green
  },
  profile: {
    width: 56,
    height: 56,
    marginRight: 24,
    borderRadius: 32
  },
  basicText: {
    color: '#FFFFFF',
    opacity: .5,
    fontSize: 16,
  },
  userNameText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 6,
  }
})