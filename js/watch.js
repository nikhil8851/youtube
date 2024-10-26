
// This code is used to display the video on the webpage when the user clicks on the play button.


let iframe = document.createElement("iframe");
iframe.width = "560";
iframe.height = "315";
iframe.src = "";
iframe.title = "YouTube video player";
iframe.frameborder = "0";
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.referrerpolicy = "strict-origin-when-cross-origin";
iframe.allowfullscreen = true;


let list = document.querySelector(".list_content");

list.appendChild(iframe);

export default function watchVideo() {

    console.log("watch video function called")
    let items = localStorage.getItem("currentVideo")

    if (items) {
        let currentVideo = JSON.parse(items)
        console.log(currentVideo)
        console.log("yessss")
        iframe.src = "https://www.youtube.com/embed/" + currentVideo.id + "?autoplay=1&mute=1"

    }
    else {
        console.log('No video found in local storage')
    }
   
}













