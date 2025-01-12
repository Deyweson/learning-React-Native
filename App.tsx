
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name='Deyweson' />
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/117497966?v=4" }}
        style={{ height: 200, width: 200, top: 50 }}
      />
      <Button title='Curtir' />

      <TouchableOpacity style={{ top: 50, padding: 10, backgroundColor: 'green', borderRadius:10 }}>
        <Text style={{ color: '#fff' }}>Avançar</Text>
      </TouchableOpacity>

      <TextInput 
        keyboardType='number-pad'
        placeholder='Digite aqui...'
        style={{top: 80, borderWidth: 1, borderColor: 'green', width: 100, textAlign: 'center'}}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: 100
  },
});
