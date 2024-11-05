
var menuIcon = document.querySelector(".menu_icon")
var sidebar = document.querySelector(".sidebar")
var content = document.querySelector(".content")

menuIcon.onclick =function(){
    sidebar.classList.toggle("small-sidebar")
    content.classList.toggle("large-content")
    content.classList.toggle("large")
}



let searchResults = document.querySelector("#search_input")
let searchButton = document.querySelector("#search_btn")








let item = localStorage.getItem('currentVideo');


let info = JSON.parse(item);



let iframe = document.createElement('iframe');
iframe.src = ``;
iframe.style.width = '100%';    
iframe.style.height = '450px';
iframe.classList.add('iframeVideo');


let channelTitle = document.createElement('h2');
channelTitle.innerHTML = info.snippet.channelTitle;

let desc = document.createElement('p');
desc.innerHTML = info.snippet.description;

let title = document.createElement('h4');
title.innerHTML = info.snippet.title;










document.querySelector('.play-video').append(iframe ,title, channelTitle, desc);

let items = localStorage.getItem('currentVideo');
let currentVideo = JSON.parse(items);
function watchVideo() {

    if (items) {
        try {
            
            if (currentVideo && currentVideo.id) {
                iframe.src = "https://www.youtube.com/embed/" + currentVideo.id.videoId;
            } else {
                console.log('Invalid');
            }
        } catch (error) {
            console.error('Error', error);
        }
    } else {
        console.log('No video ');
    }


}

watchVideo();
// UC4SVo0Ue36XCfOyb5Lh1viQ
function fetchplaylist() {
    let channelid = currentVideo.snippet.channelId;

    let urlobj = {
        key: "AIzaSyCAhxJav3emHDVp6UbDlP8ntYfl49u6vMM",
        cchannelid: channelid,
        maxResults: 10
    };

    let { key, cchannelid, maxResults } = urlobj;

    fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${cchannelid}&maxResults=${maxResults}&key=${key}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data, "data");

        let play = []; 
        for (let i = 0; i < data.items.length; i++) {
            play.push(data.items[i]); 
            
        }
        console.log(play)
        playlist(play); 
    })
    .catch(error => console.error(error, "error"));
}

function playlist(items) {
 
   let slid_bar = document.querySelector(".side_video_list"); 
   slid_bar.innerHTML = ""; 

    
    
    for (let item of items) {
        
   let a = document.createElement('a');
    a.className = "small-thumbnail"
    let imgtag = document.createElement('img');
  
    
   
    a.appendChild(imgtag);

    let vid_info = document.createElement('div');
    vid_info.className = "vid-info";

    let title = document.createElement('a');
   
    let name = document.createElement('p');
    let views = document.createElement('p');
    views.innerText = "584K " + "views"
        vid_info.appendChild(title);
        vid_info.appendChild(name);
        vid_info.appendChild(views);
        slid_bar.appendChild(imgtag);
        slid_bar.appendChild(vid_info);

        imgtag.src = item.snippet.thumbnails.medium.url; 
        title.innerHTML = item.snippet.title; 
        name.innerHTML = item.snippet.channelTitle; 

       
      

       

   }
}

fetchplaylist();
playlist()