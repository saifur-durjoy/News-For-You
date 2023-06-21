import React, { Component } from 'react'

export class NewPara extends Component {
  render() {
    let {title, description, imgSrc, url, publishedAt, mode} = this.props
    // rgb(186 236 216)

    let colorEditor = {
        color: this.props.mode==='dark' ? 'light' : 'dark',
        backgroundColor: this.props.mode==='dark' ? '#d0ecba' : 'white'
    }

    return (
      <div>
        <div className="card my-3" style={colorEditor}>
            <img height="200" src={imgSrc} className="card-img-top" alt=''/>
            <div className="card-body" style={colorEditor}>
            <h5 className="card-title" style={colorEditor}>{!title ? `${description.slice(0,55)}` : `${title.slice(0,55)}` }</h5>
            <p className="card-text">{description.length === 0 ? `${title.slice(0,90)}...`:`${description}...`} </p>
            <p className="card-text">{!publishedAt ? "" : `Published On: ${publishedAt.slice(0,10)}`}</p>
            <a href={url} target='_blank' className="btn btn-success">Read More.. </a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewPara