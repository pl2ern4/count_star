import React from "react";

export const RenderNumber = props => {
  let number_bar = [];
  for (let i = 0; i < 10; i++) {
    number_bar.push(
      <span className="numberCircle" key={"bar" + i} onClick={(evt)=>{props.numberClick(i+1)}}>
        {i + 1}
      </span>
    );
  }
  return <div className="input-container"> {number_bar}</div>;
};


export const RenderStar = props =>{
    let star_html = [];
    for(let i=0;i<props.limit;i++)
    {
        star_html.push( <span className="glyphicon glyphicon-star" key={"star"+i} />)
    }
    return <div className="star-container">{star_html}</div>
}
export const ResultNumber = props =>{

    let numberResult = [];
    console.log(props);
    props && props.resultBar.forEach((obj,i)=>{
        numberResult.push( <span className="numberCircle" key={"star"+i}>{obj}</span>)
    })

    return <div className="number-container">{numberResult}</div>

}
