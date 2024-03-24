import React, {Component} from 'react'
import './App.css'
import Dots from './Components/Dots'
import Slider from './Components/Slider'
import data from './Components/Imagedata'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      slideIndex : 0,
      arrow : "right"
    }
  }
  prevSlide(){
    this.setState({
      slideIndex : this.state.slideIndex ===
      0 ? data.length-1 : this.state.slideIndex-1,
      arrow : "left"
    })
  }
  nextSlide(){
    this.setState(
      {
        slideIndex : this.state.slideIndex
        === data.length-1 ? 0 : this.state.slideIndex+1,
      arrow : "right"
      }
    )
  }
  componentDidMount(){
    this.timer = setInterval(() => this.autoplay(),5000)
  }
  autoplay(){
    if(this.state.arrow === "left"){
      this.setState({
        slideIndex : this.state.slideIndex
        === 0 ? data.length-1 : this.state.slideIndex-1
      })
    } else {
      this.setState({
        slideIndex : this.state.slideIndex
        === data.length-1 ? 0 : this.state.slideIndex+1
    })
  } 
}
  render() {
  return (
    <div className="App">
      <h1>Image Slider</h1>
      <div className = 'container'>
        <div className = 'slideshow-container'>
          <Slider slideIndex = {this.state.slideIndex}/>
          <span className = "prev" onclick = {() => this.prevSlide()}>&#10094;</span>
          <span className = "next" onclick = {() => this.nextSlide()}>&#10095;</span>
        </div>
        <br/>
        <Dots slideIndex = {this.state.slideIndex}/>
      </div>
    </div>
  )
}
}

