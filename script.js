console.log("Welcome to spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Muskurane", filePath: "songs/1.mp3", coverPath: "covers/covers1.jpg" },
    { songName: "Anarkali", filePath: "songs/2.mp3", coverPath: "covers/covers2.jpg" },
    { songName: "Delhiwali", filePath: "songs/3.mp3", coverPath: "covers/covers3.jpg" },
    { songName: "dhoom dham", filePath: "songs/4.mp3", coverPath: "covers/covers4.jpg" },
    { songName: "kamli", filePath: "songs/5.mp3", coverPath: "covers/covers5.jpg" },
    { songName: "Mohabat barsadena", filePath: "songs/6.mp3", coverPath: "covers/covers6.jpg" },
    { songName: "Nach le", filePath: "songs/7.mp3", coverPath: "covers/covers7.jpg" },
    { songName: "piyaayena", filePath: "songs/8.mp3", coverPath: "covers/covers8.jpg" },
    { songName: "second hand jawani", filePath: "songs/9.mp3", coverPath: "covers/covers9.jpg" },

]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play()

//Handle to play/ pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
    console.log('click')
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log('progress');
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);  
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0){
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})