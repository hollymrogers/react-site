import React from 'react'

export default class videos extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} />
        <p>{this.props.name}</p>
        <p>{this.props.title}</p>
        <p>{this.props.views}</p>
        <p>{this.props.date}</p>
      </div>
    )
  }
}
