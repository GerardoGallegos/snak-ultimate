import React, { Component, createContext } from 'react'
const EditorContext = createContext()

export class EditorProvider extends Component {
  state = {
    time: 0,
    progress: 0,
    isPreview: false,
    regionInProgress: {},
    regionInFocus: { layers: {} },
    fileInFocus: { uid: '' },
    audioInFocus: {},
    keyframesInFocus: []
  }

  render () {
    return (
      <EditorContext.Provider
        value={this.state}
      >
        { this.props.children }
      </EditorContext.Provider>
    )
  }
}

export const EditorConsumer = EditorContext.Consumer
