// Initialize the variable 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongNmae = document.getElementById('masterSongNmae');
let songItem =Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Let me love you", filaPath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: " Nakhre__ZackNight", filaPath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Dhere Dhere__ZackNight", filaPath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: " Galtiyan__ZackNight ", filaPath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Thumka__ZackNight", filaPath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Unconditional Emotion__ZackNight", filaPath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "__ZackNight", filaPath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "__ZackNight", filaPath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "__ZackNight", filaPath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Yaar_Tu__ZackNight", filaPath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "__ZackNight", filaPath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "__ZackNight", filaPath: "songs/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "__ZackNight", filaPath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "__ZackNight", filaPath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "Salame-e-Ishq", filaPath: "songs/15.mp3", coverPath: "covers/15.jpg" },
    { songName: "Salame-e-Ishq", filaPath: "songs/16.mp3", coverPath: "covers/16.jpg" },
]

songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        gif.style.opacity = 0;

    }
})

// Lesten to Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress); 
    myProgressBar.value = progress;

})


myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays= ()=>{
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
element.classList.remove('fa-pause'); 
element.classList.add('fa-play');
})
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
         makeAllPlays();
         
        
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play');
         e.target.classList.add('fa-pause');
         audioElement.src=`songs/${songIndex+1}.mp3`;
         masterSongNmae.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

    })
})



document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=11) {
        songIndex=0;
        
    }else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongNmae.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})


document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=11) {
        songIndex=0;
        
    }else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongNmae.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
