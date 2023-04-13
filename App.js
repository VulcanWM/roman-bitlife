import { StyleSheet, ScrollView } from 'react-native';
import { Text, View, TouchableOpacity, Strong, BorderView } from "./components/Themed";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headervalue}>Name: <Strong>Julius Caesar</Strong></Text>
        <View style={{flex:1}}>
          <Text style={[{textAlign: 'right'}, styles.headervalue]}>Money: <Strong>1000</Strong></Text>
        </View>
      </View>
      <BorderView style={styles.events}>
        <ScrollView style={{width: "90%"}}>
          <Text>Age: 0</Text>
          <Text>I have been born</Text>
          
          {[...Array(40).keys()].map((el, index) => (
            <>
              <Text>Age: {index}</Text>
              <Text>I am {index} years old</Text>
            </>
          ))}
        </ScrollView>
      </BorderView>
      <View style={styles.center}>
        <TouchableOpacity lightColor="black" darkColor="white" style={styles.button}>
          <Text lightColor="white" darkColor="black" style={styles.text}>Age</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    position: 'absolute',
    top: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    paddingBottom: 10,
  },
  events: {
    top: 60,
    alignItems: "center",
    height: 550,
    margin: 10,
  },
  headervalue: {
    padding: 5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 90,
    height: 90,
    padding: 10,
    borderRadius:90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
  },
});

