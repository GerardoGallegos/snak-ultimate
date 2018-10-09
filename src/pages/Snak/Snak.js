import React, { Component } from 'react'
import View from '../../components/View'
import { AppProvider, AppConsumer } from './AppContext'

class SnakPage extends Component {
  render () {
    return (
      <AppProvider>
        <View>
          <h1>Snak Editor {this.props.match.params.id}</h1>
        </View>
      </AppProvider>
    )
  }
}

export default SnakPage
