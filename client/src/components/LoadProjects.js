import React from 'react';
import axios from 'axios';
import {CloudinaryContext, Image} from 'cloudinary-react';


class LoadProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }

  componentDidMount() {
    axios.get('https://res.cloudinary.com/gdevany/image/list/main.json')
      .then(res => {
        console.log(res.data.resources);
        this.setState({gallery: res.data.resources});
      })

  }
 render() {
   return(
     <div>
     <CloudinaryContext cloudName="gdevany"> {
       this.state.gallery.map(proj => {
         return(
           <div key={proj.public_id}>
             <Image publicId={proj.public_id}></Image>
           </div>
         )
       })
       }
     </CloudinaryContext>
   </div>
   )
 }

}

export default LoadProjects;
