import React, { Component, createContext } from 'react'

const AppContext = createContext()

export class AppProvider extends Component {
  state = {
    title: 'mock-title'
  }

  render () {
    return (
      <AppContext.Provider
        value={{
          state: this.state
        }}
      >
        { this.props.children }
      </AppContext.Provider>
    )
  }
}

export const AppConsumer = AppContext.Consumer
