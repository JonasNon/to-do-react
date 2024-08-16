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
      colorList: [],
      selectedItem: null,
      color: "#2dc937"
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
    this.setState({colorList: [...this.state.colorList, this.state.color]})
  }
  
  deleteItem = (index) => {
    let objectCopy = [...this.state.stringList]
    objectCopy.splice(index, 1)
    this.setState({stringList: [...objectCopy]})
    let colorCopy = [...this.state.colorList]
    colorCopy.splice(index, 1)
    this.setState({colorList: [...colorCopy]})
  }



  selectItem = (index, newTitle) => {

    
    this.state.selectedItem == index ? 
    this.setState({selectedItem: "null"}) :
    this.setState({selectedItem: index})
    console.log(this.state.selectedItem)
  }

  // chooseColor = (div) => { //absolutely none of this works ;(
  //   const colors = [document.getElementById("green"), document.getElementById("yellow"), document.getElementById("red")]
  //   console.log(colors)
  //   for (let i = 0; i < colors.length; i++) {
  //     colors[i].classList.remove("selected")
  //   }
  //   document.getElementById(div).classList.add("selected")
  // }

  chooseColor = (colorString) => {
    console.log(colorString)
    if (colorString === "red") {
      this.setState({color: "#cc3232"})
    } else if (colorString === "yellow") {
      this.setState({color: "#e7b416"})
    } else if (colorString === "green") {
      this.setState({color: "#2dc937"})
    }
    console.log(this.state.color)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Make a list:</p>
          <form onSubmit={this.handleSubmit}>
            <div className='color-selection' id='green' onClick={() => this.chooseColor("green")}></div> <div className='color-selection' id='yellow' onClick={() => this.chooseColor("yellow")}></div> <div className='color-selection' id='red' onClick={() => this.chooseColor("red")}></div> 
            <input type='text' value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type='sumbit' onClick={this.handleSubmit}>sumbit</button>
          </form>
          <ol>{this.state.stringList.map((string, index) => {
            return <TodoCard 
            key={index} 
            title={string} 
            index={index} 
            clickToRemove={this.deleteItem} 
            clickToEdit={this.selectItem} 
            selectedItem={this.state.selectedItem} 
            handleChange={this.handleChange} 
            color={this.state.colorList[index]}/>
            
          })}</ol>


        </header>
      </div>
    );
  }

}

export default App;
