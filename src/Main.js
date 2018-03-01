import React, { Component } from "react";
import {RenderNumber,RenderStar,ResultNumber} from "./util";

import './App.css';
//{this.setInterval()}
class Main extends Component {
    constructor(props){
        super(props);
        this.state=this.initialState();
        this.randomNumber = Math.floor(Math.random()*(15-1+1)+1);
        this.baseState = this.state;    
        this.numberClick = this.numberClick.bind(this);
        this.resetForm=this.resetForm.bind(this);
        this.initialState =this.initialState.bind(this);
    }
    initialState(){
        this.randomNumber = Math.floor(Math.random()*(15-1+1)+1);
        return {
            selectedNumber:[],
            sum:0,
            isCorrect:''
        };

    }
    isCountCorrect(count){
        return this.randomNumber===(this.state.sum + count)
    }
    resetForm(){
        this.setState(this.initialState);
    }
    numberClick(evt){
        const {selectedNumber,sum}=this.state;
        
        if(selectedNumber.length>15)
        {
            window.alert("You have crossed maximum number of trials, Please reset the form")
            return false;
        }
        selectedNumber.push(evt);
        let isCorrect =this.isCountCorrect(evt);
        this.setState({
            selectedNumber:selectedNumber,
            sum:sum+evt,
            isCorrect:isCorrect
        });
    }
    setInterval(){
       let timeInterval = 10; 
       let {resetForm} = this;
       let timer = window.setInterval(function(){
            timeInterval--;
            console.log(timeInterval);
            if(timeInterval<=0)
            {
                clearInterval(timer);
                resetForm();
            }
       },1000)
    }
  render() {
    const {isCorrect,sum} =this.state;
    return (
      <div className="container">
        <div>
            Counting Stars
            <button type="button" className={sum===0 ? "btn btn-primary disabled" : "btn btn-primary"} onClick={this.resetForm}>Reset</button>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <RenderStar limit={this.randomNumber}/>
          </div>
          <div className="col-lg-2">
                {(sum>0)? <div className={(!!isCorrect)? "glyphicon glyphicon-ok result-container" :"glyphicon glyphicon-remove result-container"}/> : <div className="equalSign result-container">=</div> }
          </div>
          <div className="col-lg-5">
            <ResultNumber resultBar={this.state.selectedNumber}/>
          </div>
        </div>
        {<RenderNumber numberClick={this.numberClick}/>}
      </div>
    );
  }
}

export default Main;
