import React, {Component} from 'react';
import logo from './logo.svg';
import TodoCard from './TodoCard'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      inputValue: "",
      stringList: [],
      editMode: false,
      selectedItem: "placeholder"
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
    this.setState({editMode: false}) : 
    this.setState({editMode: true})
  }

  selectItem = (index, newTitle) => {

    
    this.state.selectedItem == index ? 
    this.setState({stringList: [...this.state.stringList, this.state.newTitle]}) :
    this.setState({selectedItem: index})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.name}</p>
          <button onClick={this.handleClick}>TOGGLE ME</button>
          <p>
            {this.state.isClicked ? "true"  : "false"}
          </p>
          <p>Make a list:</p>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type='sumbit' onClick={this.handleSubmit}>sumbit</button>
          </form>
          <button onClick={() => this.editItems()}>Edit Items!</button>
          <ol>{this.state.stringList.map((string, index) => {
            return <TodoCard key={index} title={string} index={index} clickToRemove={this.deleteItem} clickToEdit={this.selectItem} selectedItem={this.state.selectedItem}/>
            
          })}</ol>


        </header>
      </div>
    );
  }

}

export default App;
