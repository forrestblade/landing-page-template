import React, { Component } from 'react'
import butter from '../butter-client'
import {Hero} from './components/hero';
import { Header } from './components/header';

export class App extends Component {
  state = {
    data: {
      fields: {}
    }
  }

  async componentDidMount () {
    const data = await butter.page.retrieve('*', 'landing-template')
    this.setState(data.data)
  }
  
  render () {
    const { fields } = this.state.data
    return (
      <React.Fragment>
        <Header fields={fields} />
        <Hero fields={fields} />
      </React.Fragment>
    )
  }
}
