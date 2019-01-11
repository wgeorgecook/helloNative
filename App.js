import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View>
        <Text> Hello, { (this.props.name).trim() }!</Text>
      </View>
    )
  }
}


export default class App extends Component {

  state = { name: "" }


  render() {
    return (
      <View style={styles.container}>
        <Text>Please enter your name below.</Text>
        <TextInput
          style={styles.textArea}
          value={ this.state.name }
          onChangeText={ ( name ) => this.setState({ name: name.trim() }) }
        />
        {
          ( this.state.name === "World" )
            ? <Text>Womp womp</Text>
            : ( this.state.name.length > 0 )
            ? <Hello name={this.state.name} />
            : <Text>Please enter a name for some magic!</Text>
        }
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    height: 64,
    width: '33%',
    borderWidth: 1,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  }
});
