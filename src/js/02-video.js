import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function ({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds)
}, 1000));

let currentTime = 0;

if (localStorage.getItem("videoplayer-current-time")) {
    currentTime = localStorage.getItem("videoplayer-current-time");
}

player.setCurrentTime(currentTime)