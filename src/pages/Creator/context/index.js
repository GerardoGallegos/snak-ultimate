import React from 'react'
import { EditorConsumer } from './EditorContext'
import { PreferencesConsumer } from './PreferencesContext'
import { ProjectConsumer } from './ProjectContext'

// Danger this is the root consumer includes all consumers
// but the children it will render with every change
export default (props) => {
  return (
    <EditorConsumer>
      {(editor) => (
        <PreferencesConsumer>
          {(preferences) => (
            <ProjectConsumer>
              {(project) => React.createElement(props.children, {
                editor,
                preferences,
                project
              })}
            </ProjectConsumer>
          )}
        </PreferencesConsumer>
      )}
    </EditorConsumer>
  )
}
