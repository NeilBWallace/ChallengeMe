import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {MediaCapture,MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { VideoPlayer } from '@ionic-native/video-player';



/**
 * Generated class for the ChallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-challenge',
  templateUrl: 'challenge.html',
})
export class ChallengePage {
  @ViewChild('myvideo') myVideo: any;
  constructor(   private camera: Camera,
    private videoCapture: MediaCapture,public navCtrl: NavController, public navParams: NavParams) {
  }
  cameraOptions: CameraOptions = {
    sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.FILE_URI,
    mediaType: this.camera.MediaType.ALLMEDIA
 };
  
    //   
     //  this.camera.getPicture(this.cameraOptions).then( (fileUri: any) => {
     //     console.log('File URI: ' + JSON.stringify(fileUri));
     //     window.resolveLocalFileSystemURL('file://' + fileUri, (fileEntry) => {
     //       console.log('Type: ' + (typeof fileEntry));
     //        fileEntry.file( (file) => {
     //          console.log('File: ' + (typeof file) + ', ' + JSON.stringify(file));
     //          const fileReader = new FileReader();
               
     //          fileReader.onload= (result: any) => {
     //            console.log('File Reader Result: ' + JSON.stringify(result));
     //            let arrayBuffer = result.target.result;
     //            let blob = new Blob([new Uint8Array(arrayBuffer)], {type: 'video/mp4'});
     //            const name = '' + Date.now();
     //            this.upload(blob);
     //          };
    
              
               
       //        fileReader.readAsArrayBuffer(file);
     //        }, (error) => {
     //          console.log('File Entry Error: ' + JSON.stringify(error));
     //        });
     //     }, (error) => {
     //       console.log('Error resolving file: ' + JSON.stringify(error));
     //     });
     //   });
      
       
  
        
    
    
    //upload(blob: Blob) {
    // this.Fbref.child('vid.mp4').put(blob);
   // }
   

  Challenge()
  {
    let options: CaptureImageOptions = { limit: 3 };
    
    this.videoCapture.captureVideo(options)
      .then(
        (data: MediaFile[]) => {console.log(data);    },
        (err: CaptureError) => console.error(err)
      );
     
}


videoURL: any;

Select(){
  let video = this.myVideo.nativeElement;
  var options ={
    sourceType:2,
    mediaType:1
  };
this.camera.getPicture(options).then((data) =>{
data ='http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4';
  
  video.src=data;
 video.play();
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallengePage');
  }

}
