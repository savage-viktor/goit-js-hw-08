const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function ({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds)
});

let currentTime = 0;

if (localStorage.getItem("videoplayer-current-time")) {
    currentTime = localStorage.getItem("videoplayer-current-time");
}

player.setCurrentTime(currentTime)