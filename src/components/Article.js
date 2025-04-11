import React from "react"
function Article(props){
const articleDate = props.date ? props.date : "January 1 , 1970";
const minutes= props.minutes;

let emoji=""
if(minutes<30){
    const cups = Math.ceil(minutes/5);
    emoji = "☕️".repeat(cups);
}else{
    const bentos = Math.ceil(minutes/10);
    emoji="🍱".repeat(bentos)
}
return(
      <article>
      <h3>{props.title}</h3>
      <small>{articleDate}</small> <br/> <br/>
      <small>{emoji} {minutes} min read</small>
      <p>{props.preview}</p>
      </article>
    )
};
export default Article;