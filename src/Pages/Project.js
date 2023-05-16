import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import IMG from '../../src/Project_img/img.png';
import IMGd from '../../src/Project_img/imgd.png';
import IMGp from '../../src/Project_img/imgf.jpg';
import IMGl from '../../src/Project_img/imgl.jpg';
export const Project = () => {

  const mainDiv = {
    width: "600px",
    
  };
  

  return (
    <div style={ {display:"grid", gridTemplateColumns:"auto auto auto", gap:'2rem'} } >

        <div style={{color:"red"}}>
          <img src= {IMG} />
          <p> tittle</p>
          <a>git</a>
          <a> demo</a>
        </div> 

        <div style={{color:"red" ,width:"200px",height:"250px"}}>
          <img src= {IMGp} />
          <p> tittle</p>
          <a>git</a>
          <a> demo</a>
        </div> 
        
        <div style={{color:"red"}}>
          <img src= {IMGl} />
          <p> tittle</p>
          <a>git</a>
          <a> demo</a>
        </div>

        <div style={{color:"red"}}>
          <img src= {IMGd} />
          <p> tittle</p>
          <a>git</a>
          <a> demo</a>
        </div>



        <div style={{color:"red"}}>
          <img src= {IMGp} />
          <p> tittle</p>
          <a>git</a>
          <a> demo</a>
        </div> 
        

    </div>
  )
}



  

