import React, { Component, createContext } from 'react'

const PreferencesContext = createContext()

export class PreferencesProvider extends Component {
  state = {
    // User preferences
    lineEverySeconds: 10,

    // Zoom hanlders
    zoomIncrease: 10,
    zoomWidth: 100,
    zoomLeft: 0,

    // Apperance
    light: 50
  }

  render () {
    return (
      <PreferencesContext.Provider
        value={this.state}
      >
        { this.props.children }
      </PreferencesContext.Provider>
    )
  }
}

export const PreferencesConsumer = PreferencesContext.Consumer
