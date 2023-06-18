import React, { Component } from 'react'

export class NewPara extends Component {
  render() {
    let {title, description, imgSrc, url} = this.props

    return (
      <div>
        <div className="card my-3">
            <img height="200" src={imgSrc} className="card-img-top" alt="Failed To Load Image!"/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target='_blank' className="btn btn-success">Read More.. </a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewPara