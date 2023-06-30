import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            searchText: ""
        }
    };

    handleChange = (e)=> {
        this.setState({
            searchText: e.target.value
        })
    }

    handleSearch = (event)=> {
        event.preventDefault();
        this.props.searchNav(this.state.searchText)
    }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsForYou</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>  
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                        </li>                  
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                        </li>
                     </ul>
                     <div className="form-check form-switch text-light mx-4">
                        <input onClick={this.props.toggleColor} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    <form className="d-flex" role="search">
                      <input onChange={this.handleChange} value={this.state.searchText} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button onClick={this.handleSearch} className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>               
            </div>
        </nav>
    </div>
    )
  }
}

export default Navbar

