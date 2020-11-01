import React from 'react'
import Webcam from 'react-webcam'
// import resemble from 'resemblejs'
// import logo from '../logo.svg';
// import sanath from '../sanath.jpeg'
import ganesh from '../ganesh.jpeg'
// import QuizPage from '../screens/QuizPage'
import {Link} from 'react-router-dom'
import axios from 'axios'
const compareImages = require("resemblejs/compareImages");
function Facial() {
    const [name,setname]=React.useState('')
    const [roll,setroll]=React.useState('')
    const styles={

    }
    const videoConstraints = {
        width: 380,
        height: 220,
        facingMode: "user"
      };



        const [imgSrc, setImgSrc] = React.useState(null);
        
        const webcamRef = React.useRef(null);

        const [message,setmessage]=React.useState('');
        

      
        const capture = React.useCallback(
          () => {
            const imageSrc = webcamRef.current.getScreenshot();
            
            setImgSrc(imageSrc)
           

            const options = {
                output: {
                    errorColor: {
                        red: 255,
                        green: 0,
                        blue: 255
                    },
                    errorType: "movement",
                    transparency: 0.3,
                    largeImageThreshold: 1200,
                    useCrossOrigin: false,
                    outputDiff: true
                },
                scaleToSameSize: true,
                ignore: "antialiasing"
            };
            axios.post('/image',{'data':imageSrc})
            .then(r=>{
              console.log(r.data)
            })
             compareImages(
                imageSrc,imageSrc,
                options
            ).then(result=>{
              console.log(result.misMatchPercentage);
              if(result.misMatchPercentage<30){
                setmessage('Successful')

              }
              else{
                setmessage('Unsuccessful')
              }
            });

            
        },
          [imgSrc]
        );
    return (
        <div style={{height:'100vh',width:'100vw'}} className='d-flex justify-content-center align-items-center flex-column '>
          <h2>Capture your pic for authentication</h2>
          <input value={name} className="form-control" placeholder="Name" type='text' onChange={(e)=>setname(e.target.value)}/>
          <br/>
          <input value={roll} className="form-control" placeholder="Roll no" type='text' onChange={(e)=>setroll(e.target.value)}/>
          <br/>
           <Webcam
            audio={false}
            height={220}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={380}
            videoConstraints={videoConstraints}
        className='d-block '/>
            <button className="btn btn-primary my-5" onClick={capture}>Capture photo</button>
            
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
        {message=='Successful'?   <Link className="nav-link" style={{color:"greenyellow"}} to="/quiz"><button className='btn btn-success'>Next</button></Link>: <div>{message}</div>}
        
        </div>
    )
}

export default Facial;
