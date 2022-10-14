import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Menu = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>Zepeda eres un menu</Text>
      <Button
        title='Ir a Detalles'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    'container' : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    }
})