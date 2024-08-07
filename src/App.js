import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import props from 'prop-types';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isClicked: false,
      inputValue: "",
      stringList: [],
      editMode: false
    }
  }
  
  handleClick = (index) => {
    this.state.isClicked ? this.setState({isClicked : false}) : this.setState({isClicked : true})
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({stringList: [...this.state.stringList, this.state.inputValue]})
    this.setState({inputValue: ""})
  }
  
  deleteItem = (index) => {
    let objectCopy = [...this.state.stringList]
    objectCopy.splice(index, 1)
    console.log(objectCopy)
    this.setState({stringList: [...objectCopy]})
  }

  editItems = () => {
    this.state.editMode ? 
    this.setState({editMode: true}) : 
    this.setState({editMode: true})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>TOGGLE ME</button>
          <p>
            {this.state.isClicked ? "true"  : "false"}
          </p>
          <p>Make a list:</p>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type='sumbit'>sumbit</button>
          </form>
          <button onClick={() => this.editItems()}>Edit Items!</button>
          <ol>{this.state.stringList.map((string, index) => {
            return <li key={index}>{this.state.editMode ? <input onSubmit={this.handleSubmit} placeholder={string}></input> : string}
              <button onClick={() => this.deleteItem(index)}>Delete Me!</button>
            </li>
          })}</ol>


        </header>
      </div>
    );
  }

}

export default App;
