import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

class App extends Component {
  _consoles() {
    console.log("hola");
  }
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Primera pagina de React Native</Text>
        </View>

        <Button
          onPress={() => {
            this._consoles();
          }}
          title="Mostrar Consola"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
