import React, { Component, Fragment} from "react";

// Dinamic Images from API
import DinamicImage from "./DinamicImage";

export default class DinamicPage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   images: []
   
  }
 }

 componentDidMount() {
  const token = sessionStorage.getItem("X-Parse-Session-Token");
  const data = JSON.stringify({ token });
  fetch("http://localhost:1337/parse/functions/" + this.props.function, {
   method: "POST",
   headers: {
    'X-Parse-Application-Id': 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
    'Content-Type': 'application/json'
   },
   body: data
  }).then(response => {
   return response.json();
  }).then(json => {
   let images = [];
   json.result.forEach(item => {
    images.push({ name: item.name, link: item.link, id: item.objectId });
   });
   this.setState({ images: images });
  }).catch(error => {
   console.error(error);
  });
 }

 render() {
  return (
   < div>
    <div className="container content">
     < h1 className="font-weight-light text-center text-lg-left mt-4 mb-0" > LIST OF {this.props.title}</h1>

     <div className="gradient">&nbsp;</div>
     <div className="row text-center text-lg-left">
      {
       this.state.images.map(item => {
        return (
            
        <Fragment>
         <DinamicImage key={item.id} src={item.link} alt={item.name}></DinamicImage> 
         <p>{item.name}</p>
         </Fragment>
         
        );
       })
      }
     </div>
    </div>
   </div>
  );
 }
}