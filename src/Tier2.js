import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }


  componentWillReceiveProps(newProps) {
    this.setState({
      color: newProps.color,
      childColor: getReducedColor(newProps.color)
    })
  }

  handleChildClick = (e) => {
    e.stopPropagation()
    this.setState({
      childColor: getRandomColor()
    })
  }


  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.props.handleChildClick} style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick}/>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick}/>
      </div>
    )
  }
}
