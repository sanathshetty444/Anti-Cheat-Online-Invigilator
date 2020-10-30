import React from 'react'
import Webcam from 'react-webcam'
import resemble from 'resemblejs'
import logo from '../logo.svg';
import sanath from '../sanath.jpeg'
import ganesh from '../ganesh.jpeg'
const compareImages = require("resemblejs/compareImages");
function Facial() {
    const videoConstraints = {
        width: 380,
        height: 220,
        facingMode: "user"
      };



        const [imgSrc, setImgSrc] = React.useState(null);
        
        const webcamRef = React.useRef(null);

        

      
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
            const data =  compareImages(
                imageSrc,logo,
                options
            );
            console.log(data)
        },
          [imgSrc]
        );
    return (
        <div>
           <Webcam
            audio={false}
            height={220}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={380}
            videoConstraints={videoConstraints}
        />
            <button onClick={capture}>Capture photo</button>
            
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
      
        </div>
    )
}

export default Facial;
