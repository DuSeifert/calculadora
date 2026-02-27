import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default function TabLayout() {

  //TODO: Lógica da calculadora pronta, só falta fazer a lógica para mostrar a expressão no display enquanto digita
  //TODO: Adicionar a funcionalidade de porcentagem

  const [valor, setValor] = useState("");
  const [anterior, setAnterior] = useState("");
  const [operador, setOperador] = useState("");
  const [display, setDisplay] = useState(" ");

  const buttonPress = (num: string) => {
    if (display == "0" || display == " ") {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num.toString());
    };
  }

  const buttonOP = (op: string) => {
      setAnterior(display);
      setDisplay(" ");
      setOperador(op);
  }

  const buttonIgual = () => {
    let resultado: Double = 0;
    switch (operador) {
      case "+":
        resultado = parseFloat(anterior) + parseFloat(display);
        break;
      case "-":
        resultado = parseFloat(anterior) - parseFloat(display);
        break;
      case "*":
        resultado = parseFloat(anterior) * parseFloat(display);
        break;
      case "/":
        resultado = parseFloat(anterior) / parseFloat(display);
        break;
    }
    setDisplay(resultado.toString());
  }
  
  const buttonClear = () => {
    setValor("");
    setAnterior("");
    setOperador("");
    setDisplay(" ");
  }

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  }

  return (
    <>
      <SafeAreaView>

      <View style={styles.container}>  
        <View style={styles.painel}>
          <Text style={styles.textoPainel}>{display}</Text>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity onPress = {() => buttonClear()} style={styles.botaoAC}>
            <Text style={styles.textoBotao}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoOP}>
            <Text style={styles.textoBotao}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => buttonOP("/")} style={styles.botaoOP}>
            <Text style={styles.textoBotao}>/</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.areaBotao}>

          <TouchableOpacity onPress={() => buttonPress("7")} style={styles.botao}>
            <Text style={styles.textoBotao}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonPress("8")} style={styles.botao}>
            <Text style={styles.textoBotao}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonPress("9")} style={styles.botao}>
            <Text style={styles.textoBotao}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => buttonOP("*")} style={styles.botaoOP}>
            <Text style={styles.textoBotao}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity onPress={() => buttonPress("4")} style={styles.botao}>
            <Text style={styles.textoBotao}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonPress("5")} style={styles.botao}>
            <Text style={styles.textoBotao}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonPress("6")} style={styles.botao}>
            <Text style={styles.textoBotao}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => buttonOP("-")} style={styles.botaoOP}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity onPress={() => buttonPress("1")} style={styles.botao}>
            <Text style={styles.textoBotao}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonPress("2")} style={styles.botao}>
            <Text style={styles.textoBotao}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonPress("3")} style={styles.botao}>
            <Text style={styles.textoBotao}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => buttonOP("+")} style={styles.botaoOP}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity onPress={() => buttonPress("0")} style={styles.botao}>
            <Text style={styles.textoBotao}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => backspace()}style={styles.botao}>
            <Text style={styles.textoBotao}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => buttonIgual()} style={styles.botaoIgual}>
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
    backgroundColor: "darkslategrey",
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
    backgroundColor: "dimgray",
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
    backgroundColor: "red",
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
