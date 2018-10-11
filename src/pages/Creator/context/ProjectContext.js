import React, { Component, createContext } from 'react'
import * as api from '../../../services/api'

const ProjectContext = createContext()

export class ProjectProvider extends Component {
  state = {
    snak: {},
    regions: [],
    audios: [],
    assets: [],
    files: [],
    duration: 120,
    isFetching: false,
    isUploading: false,
    tick: 0
  }

  componentDidMount () {
    this.props.match.params.id === 'new'
      ? this.createNew()
      : this.loadSnak()
  }

  createNew = async () => {
    const snak = await api.snaks.create({ title: 'awesome' })
    this.props.history.push(`/creator/${snak._id}`)
    this.unbundle(snak)
  }

  loadSnak = async () => {
    const snak = await api.snaks.get(this.props.match.params.id)
    this.unbundle(snak)
  }

  bundle = () => {
    const {
      snak,
      regions,
      audios,
      files,
      initialTree
    } = this.state

    const snakBundle = JSON.stringify({
      ...snak,
      regions,
      audios,
      files,
      initialTree,
      duration: snak.duration
    })

    console.info(snakBundle)
  }

  unbundle = (snak) => {
    try {
      if (snak.data) {
        const {
          regions,
          audios,
          files,
          initialTree
        } = JSON.parse(snak.data)

        this.setState({
          snak,
          regions,
          audios,
          files,
          initialTree
        })
      } else {
        this.setState({ snak })
      }

      window.setInterval(() => {
        this.setState(state => ({
          ...state,
          tick: state.tick + 1
        }))
      }, 1)
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return (
      <ProjectContext.Provider
        value={this.state}
      >
        { this.props.children }
      </ProjectContext.Provider>
    )
  }
}

export const ProjectConsumer = ProjectContext.Consumer
