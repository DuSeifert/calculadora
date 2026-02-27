import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {

  function MyButton() {const [count, setCount] = useState(0);  


  return (
    <>
      <SafeAreaView>

      <View style={styles.container}>  
        <View style={styles.painel}>
          <Text style={styles.textoPainel}>resultado</Text>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botaoAC}>
            <Text style={styles.textoBotao}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoOP}>
            <Text style={styles.textoBotao}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoOP}>
            <Text style={styles.textoBotao}>/</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.areaBotao}>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoOP}>
            <Text style={styles.textoBotao}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoOP}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoOP}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}> Bs </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoIgual}>
            <Text style={styles.textoBotao}>=</Text>
          </TouchableOpacity>

        </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
  },
  textoPainel: {
    color: "white",
    fontSize: 20,
    
  },
  painel: {
    backgroundColor: "gray",
    height: 50,
    marginTop: 50,
    margin: 10,
    width: 260,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingInlineEnd: 10,
  },
  areaBotao: {
    flexDirection: "row",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 50,
  },
  botaoAC: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 120,

  },
  botaoOP: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 50,

  },
  botaoIgual: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 50,

  },
  textoBotao: {
    color: "white",
        textAlign: "center",

  },
})
