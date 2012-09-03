	var mediaFile = 'http://www.openmusicarchive.org/audio/April_Kisses.mp3';
    var myMedia = null;
	var playing = false;
	var mediaRec = null;
	

    function recordAudio() {
        var src = "myrecording.mp3";
        mediaRec = new Media(src, onSuccess, onError);
        // Record audio
        mediaRec.startRecord();
    }

    function stopRecording(){
    	mediaRec.stopRecord();
    }



    function onSuccess() {
        console.log("recordAudio():Audio Success");
    }


    function onError(error) {
        alert('code: '    + error.code    + '\n' + 
              'message: ' + error.message + '\n');
    }
    function startKaraoke() {

    	updateMedia(mediaFile);
    	
		if (playing) {
			stopRecording();
            myMedia.pause();
            playing = false;
            document.getElementById('playButton').innerHTML = "Play";
		} else {
			myMedia.play(); 
			recordAudio();
            playing = true;
            document.getElementById('playButton').innerHTML = "Pause";
		}
    }

    function stopAudio() {
    	myMedia.pause();
		myMedia.stop();
		playing = false;
	}

   function onLoad() {
       document.addEventListener("deviceready", onDeviceReady, false);
   }
   
   function onDeviceReady(){
   	console.log("Got device ready");
   	updateMedia();
   }
   
   function updateMedia(src) {
   	    // Clean up old file
   	    if (myMedia != null) {
			myMedia.release();
			myMedia = null;
		}
		
		// Get the new media file		
        myMedia = new Media(mediaFile, stopAudio, null);
   }