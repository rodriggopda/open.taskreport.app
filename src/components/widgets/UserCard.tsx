import { useEffect, useState } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { query } from '../../infra/database/query'

import { THEME } from '../../configs/theme'
import { User } from '../../configs/types/user'

export function UserCard() {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    query.findOne<User>('SELECT * FROM User WHERE id = ?', ['655e57b3-2864-4c36-a876-ca437fe58902']).then(({ data }) => {
      setUser(undefined)
    })
  }, [])

  function currentPeriod() {
    const currentHour = new Date().getHours()
    if (currentHour >= 0 && currentHour < 12) return 'Bom dia,'
    if (currentHour >= 12 && currentHour < 18) return 'Boa tarde,'
    if (currentHour >= 18 && currentHour < 24) return 'Boa noite,'
  }

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.profile} source={{ uri: 'https://robohash.org/rodriggopda.png?set=set5&size=126x126' }} />
      <View style={styles.indicator} />
      {
        user ?
          <View>
            <Text style={styles.basicText}>{currentPeriod()}</Text>
            <Text style={styles.userNameText}>{user?.name || user?.username}</Text>
          </View> :
          <Text style={styles.userNameText}>{currentPeriod()?.replace(',', '')}</Text>}
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
    borderRadius: 32,
    backgroundColor: THEME.primary.yellow,
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