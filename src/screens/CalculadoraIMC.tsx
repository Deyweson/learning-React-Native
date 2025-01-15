import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Calculadora(): JSX.Element {
  const [weight, setWeight] = useState<number | null>(null)
  const [height, setHeight] = useState<number | null>(null)
  const [imc, setImc] = useState<number | null>(null)
  const [classification, setClassification] = useState<string | null>(null)


  const handleWeight = (value: string) => {
    if (value.length > 0) {
      setWeight(Number(value))
    }
  }

  const handleHeight = (value: string) => {
    if (value.length > 0) {
      setHeight(Number(value))
    }
  }

  const calculate = () => {
    if (weight && height) {
      const result = weight / (height * height)
      setImc(result)
    }
  }

  const toRank = () => {
    if (!imc) {
      return
    }
    if (imc < 18.5) {
      setClassification('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassification('Peso ideal')
    } else if (imc >= 25 && imc < 29.9) {
      setClassification('Sobrepeso')
    } else if (imc >= 30 && imc < 34.9) {
      setClassification('Obesidade grau 1')
    } else if (imc >= 35 && imc < 39.9) {
      setClassification('Obesidade grau 2')
    } else if (imc >= 40) {
      setClassification('Obesidade grau 3')
    }
  }

  const reset = () => {
    setClassification(null)
    setImc(null)
  }

  useEffect(() => { toRank() }, [imc])

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Calculadora IMC</Text>
      </View>
      <View style={style.inputsArea}>
        <View style={style.weight}>
          <FontAwesome5 name='weight' size={32} color='black' />
          <Text style={style.label}>Peso(KG)</Text>
          <TextInput style={style.input} placeholder="kg" keyboardType="numeric" onChangeText={(value) => handleWeight(value)} />
        </View>
        <View style={style.height}>
          <MaterialCommunityIcons name='human-male-height' size={32} color='black' />
          <Text style={style.label}>Altura (m)</Text>
          <TextInput style={style.input} placeholder="m" keyboardType="numeric" onChangeText={(value) => handleHeight(value)} />
        </View>
      </View>
      <View style={style.result}>


        {imc === null ? (
          <TouchableOpacity style={(height === null || weight === null) ? style.buttonDisabled : style.button} onPress={calculate} disabled={(height === null || weight === null) ? true : false}>
            <Text style={style.btnText}>Calcular</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={(height !== null || weight !== null) ? style.reset : style.buttonResetDisabled} onPress={reset}>
            <Text style={style.btnText}>Limpar</Text>
          </TouchableOpacity>
        )}



        {(imc !== null && classification !== null) && (
          <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={style.resultText}>Seu IMC</Text>
            <Text style={style.resultValue}>{imc.toFixed(2)}</Text>
            <Text style={style.resultClassification}>Classificação</Text>
            <Text style={style.resultClassificationValue}>{classification}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  )

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    marginTop: StatusBar.currentHeight || 0
  },
  header: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputsArea: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  weight: {
    flex: 0.5,
    alignItems: 'center',
  },
  height: {
    flex: 0.5,
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    top: 10
  },
  input: {
    width: 100,
    fontSize: 22,
    top: 14,
    textAlign: 'center',
    borderBottomWidth: 1,
  },
  button: {
    width: 150,
    backgroundColor: "#0047AB",
    padding: 8,
    borderRadius: 16,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff'
  },
  result: {
    flex: 0.4,
    alignItems: 'center',
  },
  resultText: {
    top: 30,
    fontSize: 24,
    fontWeight: 'bold'
  },
  resultValue: {
    fontSize: 30,
    top: 30,
    color: "#0047AB"
  },
  resultClassification: {
    top: 50,
    fontSize: 24,
    fontWeight: 'bold'
  },
  resultClassificationValue: {
    top: 50,
    fontSize: 30,
    color: 'red'
  },
  reset: {
    width: 150,
    backgroundColor: "#CD5C5C",
    padding: 8,
    borderRadius: 16,
  },
  buttonDisabled: {
    width: 150,
    backgroundColor: "#87CEEB",
    padding: 8,
    borderRadius: 16,
  },
  buttonResetDisabled: {
    width: 150,
    backgroundColor: "#FF6961",
    padding: 8,
    borderRadius: 16,
  }
})
