import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Details = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Zepeda eres detalle</Text>
      <Button
        title='Ir a loggin'
        onPress={() => navigation.navigate('loggin')}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    'container' : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
})