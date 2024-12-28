import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

class LifeCycleCompoent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log("constructor called")
  }

  componentDidMount() {
    console.log("compoennt did mount called")
  }
  componentDidUpdate() {
    console.log("compoennt did update called")
  }

  componentWillUnmount() {
    /*manually reload the app in terminal to call 
    /compontwillunmount fuction */
    console.log("compoennt will unmount called")
  }

  increment = () => {
    this.setState({count:this.state.count+1})
  }


  render() {
    console.log("render called")
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.count}</Text>
        <Button title='increment' onPress={this.increment} />
      </View>

    )
  }

}

export default LifeCycleCompoent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontFamily: 'bold',
    color: 'red'
  }
})