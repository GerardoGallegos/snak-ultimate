import React, { Component } from 'react'
import styled from 'styled-components'
import { EditorProvider } from './context/EditorContext'
import { PreferencesProvider } from './context/PreferencesContext'
import { ProjectProvider } from './context/ProjectContext'
import View from '../../components/View'

const Title = styled.h1`
  color: #FFF;
`

class CreatorPage extends Component {
  render () {
    console.log(this.state)
    return (
      <EditorProvider>
        <PreferencesProvider>
          <ProjectProvider {...this.props}>
            <View>
              <Title>Snak Editor {this.props.match.params.id}</Title>
            </View>
          </ProjectProvider>
        </PreferencesProvider>
      </EditorProvider>
    )
  }
}

export default CreatorPage
