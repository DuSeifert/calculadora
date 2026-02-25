import { Text, View, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {


  return (
    <>
    <SafeAreaView>
      <View style={styles.painel}>  
        <Text style={styles.textoPainel}>Painel</Text>
      </View>


      <View style={styles.areaBotao}>

        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            AC
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            +
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            -
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            *
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            /
          </Text>
        </View>

      </View>

      <View style={styles.areaBotao}>

        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            7
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            8
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            9
          </Text>
        </View>

      </View>

      <View style={styles.areaBotao}>

        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            4
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            5
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            6
          </Text>
        </View>
        
      </View>

      <View style={styles.areaBotao}>

        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            1
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            2
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            3
          </Text>
        </View>
        
      </View>

      <View style={styles.areaBotao}>
        
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            0
          </Text>
        </View><View style={styles.botao}>
          <Text style={styles.textoBotao}>
            .
          </Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            ⟵
          </Text>
        </View>
        
      </View>


    </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  textoPainel: {
    color: 'white',
    fontSize: 20,
  },
  painel:{
    backgroundColor: 'gray',
    height: 100,
    marginTop: 50,
    margin: 10,
  },
  areaBotao:{
    flexDirection: 'row',
  },
  botao:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  textoBotao:{
    color: 'white',
  }
});
