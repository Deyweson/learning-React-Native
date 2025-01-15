import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

interface props {
  name: string
}

const Greeting = ({ name }: props) => {
  return (
    <View>
      <Text style={{ fontSize: 26 }} >Seja bem-vido, {name}</Text>
    </View>
  )
}

export default function PrimeiraTela() {

  const [curtidas, setCurtidas] = useState(0)
  const [message, setMessage] = useState('')

  function handleCurtir() {
    setCurtidas(curtidas + 1)
  }
  useEffect(() => {
    setMessage('Curtiu' + curtidas)
  }, [curtidas])

  return (
    <View style={styles.container}>
      <Greeting name='Deyweson' />
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/117497966?v=4" }}
        style={{ height: 200, width: 200, top: 50 }}
      />
      <Button title='Curtir' onPress={() => handleCurtir()} />

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', top: 20 }}>
        <Ionicons name='heart' size={28} color='red' />
        <Text style={{ paddingHorizontal: 5 }}>{curtidas} curtidas</Text>
      </View>

      <TouchableOpacity onPress={() => setCurtidas(0)} style={{ top: 50, padding: 10, backgroundColor: 'green', borderRadius: 10 }}>
        <Text style={{ color: '#fff' }}>Reset</Text>
      </TouchableOpacity>

      <TextInput
        keyboardType='number-pad'
        placeholder='Digite aqui...'
        style={{ top: 80, borderWidth: 1, borderColor: 'green', width: 100, textAlign: 'center' }}
      />

      <Text style={{ top: 100 }}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: 100
  },
});
