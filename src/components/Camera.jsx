import React from 'react';
import {Component} from 'react'
const faceapi =require('face-api.js')
// const canvas = require('canvas');
// faceapi.env.monkeyPatch({ canvas, Image })
// global.Blob = require('blob');
// export default function Camera(){
//     const video = document.getElementById('videoInput')
//     // const faceapi =require('ngx-face-api-js')

//     async function sample()
//     {
//         const a=Promise.all([
//             faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
//             faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
//             faceapi.nets.ssdMobilenetv1.loadFromUri('../models') ,//heavier/accurate version of tiny face detector
//             console.log("yay1"),
//             start()
//         ])

//         function start() {
//             console.log("yay")
    
    
//             document.body.append('Models Loaded')
            
//             navigator.getUserMedia(
//                 { video:{} },
//                 stream => video.srcObject = stream,
//                 err => console.error(err)
//             )
            
//             // video.src = '../videos/speech.mp4'
//             console.log('video added')
//             recognizeFaces()
//         }
        

//     }
   
    
    
    
    
   

//     sample()
//     return(
//     <video id="videoInput" width="720" height="550" muted controls></video>
//     )
// } 



export default class Camera extends Component {
    constructor(props) {
      super(props);
      this.videoTag = React.createRef()
      this.video=""

      var promise = new Promise(function(resolve, reject) {
        // call resolve if the method succeeds
        faceapi.nets.faceRecognitionNet.loadFromUri('/models')
        faceapi.nets.faceLandmark68Net.loadFromUri('/models')
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
        resolve();
      })
      promise.then(this.recognizeFaces(this))
    }

    async loadLabeledImages() {

        const labels = ['Black Widow', 'Ganesh Reddy','Ayush Tomar','Prashant Kumar']
        // const labels = ['Prashant Kumar'] // for WebCam
        return Promise.all(
            labels.map(async (label)=>{
                const descriptions = []
                for(let i=1; i<=2; i++) {

                    const img = await faceapi.fetchImage(`http://localhost:3000/labeled_images/${label}/${i}.jpg`)
                    // const img = await canvas.loadImage(`./1.jpg`);
                    
                    console.log(img+"image aagaya")

                    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                    // console.log(label + i + JSON.stringify(detections))
                    descriptions.push(detections.descriptor)
                }
                document.body.append(label+' Faces Loaded | ')
                return new faceapi.LabeledFaceDescriptors(label, descriptions)
            })
        )
    }

    async recognizeFaces() {

        const labeledDescriptors = await this.loadLabeledImages(this)
        // console.log(labeledDescriptors)
        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.7)
    
    
        document.getElementById('myvideo').addEventListener('play', async () => {
            console.log('Playing')
            const canvas = faceapi.createCanvasFromMedia(this.video)
            document.body.append(canvas)
    
            const displaySize = { width: this.video.width, height: this.video.height }
            faceapi.matchDimensions(canvas, displaySize)
    
            
    
            setInterval(async () => {
                const detections = await faceapi.detectAllFaces(this.video).withFaceLandmarks().withFaceDescriptors()
    
                const resizedDetections = faceapi.resizeResults(detections, displaySize)
    
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    
                const results = resizedDetections.map((d) => {
                    return faceMatcher.findBestMatch(d.descriptor)
                })
                results.forEach( (result, i) => {
                    const box = resizedDetections[i].detection.box
                    const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
                    console.log(result.toString())
                    drawBox.draw(canvas)
                })
            }, 100)
    
    
            
        })
    }


     
    
  
    componentDidMount() {
      // getting access to webcam
      
      this.video = this.videoTag.current;
      
      const constraints = { video: true }
      navigator.mediaDevices.getUserMedia(constraints)
      .then(
        (stream) => { this.video.srcObject = stream })
    .catch(console.log);
    }


     
  
    render() {
      return (
        <video id='myvideo'
          ref={this.videoTag}
          autoPlay
        />
      )
    }
  }