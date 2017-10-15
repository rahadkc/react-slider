import React, { Component } from 'react';
// import Slider from './Slider';
import './App.css';

class App extends Component {

  constructor(){
    super();
    let sliderItems = ["one", "two", "three", "four"];
    this.state = {
      slides: sliderItems, 
      activeIndex: 1,
      left:0,
      sliderWidth: 400
    }
  }

  prevSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + this.state.sliderWidth 
    })
    if(this.state.activeIndex === 1){
      this.setState({
        activeIndex: this.state.slides.length,
        left: this.state.left -  this.state.sliderWidth * (this.state.slides.length - 1)
      })
    }
  }

  nextSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.state.sliderWidth 
    })
    if(this.state.activeIndex === this.state.slides.length){
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slides.length + 1,
        left: 0
      })
    }
  }

  clickIndicator = (e) => {
    console.log(this.state.sliderWidth - parseInt(e.target.textContent) * this.state.sliderWidth);
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left: this.state.sliderWidth - parseInt(e.target.textContent) * this.state.sliderWidth
    })
  }

  render() {
    let style={
      left: this.state.left,
      width: this.state.sliderWidth
    }

    return (
      <div className="App" id="app">
        <div className="slider-wrapper">
          <ul className="slider">
           { this.state.slides.map((item,index) => {
              return <li style={style} className={index+1 === this.state.activeIndex ? "slider-item" : "hide"}>{item}</li>
           })}
          </ul>
        </div>
        <div className="buttons-wrapper">
          <button className="prev-button" onClick={this.prevSlide}></button>
          <button className="next-button" onClick={this.nextSlide}></button>
        </div>
        <div className="indicators-wrapper">
            <ul className="indicators">
              {this.state.slides.map((item,index) => {
                return (
                <li className={index+1 === this.state.activeIndex ? 'active-indicator' : ''} onClick={this.clickIndicator}>{index+1}</li>
                )
              })
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
