const video = document.getElementById("webcam");

async function setupWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video: {
            width: {exact: 800},
            height: {exact:600}
        }, audio: false});
        video.srcObject = stream;
    } catch (err) {
           console.error("Error accessing the webcam: ", err);
        
           alert("Could not access camera at 800x600 resolution. Please check browser permissions or camera hardware.");
    }
}
setupWebcam();