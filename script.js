const video = document.getElementById("webcam");

async function setupWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
        video.srcObject = stream;
    } catch (err) {
           console.error("Error accessing the webcam: ", error);
        alert("Could not access camera. Please check browser permissions.");
    }
}
setupWebcam();