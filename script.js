
let player;
let isPlayerReady = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  isPlayerReady = true;
  console.log("YouTube Player is ready.");
  setInterval(updateProgressBar, 1000); // 1초마다 업데이트
}

function togglePlayPause(event) {
  event.stopPropagation();
  if (!isPlayerReady || !player) {
    console.error("Player is not ready in togglePlayPause.");
    return;
  }
  const playerState = player.getPlayerState();
  if (playerState === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

function toggleLike(event, el) {
  event.stopPropagation();
  el.classList.toggle("liked");
  el.textContent = el.classList.contains("liked") ? "❤" : "♡";

  const countSpan = el.nextElementSibling;
  let count = parseInt(countSpan.textContent);
  if (el.classList.contains("liked")) {
    count += 1;
  } else {
    count = Math.max(count - 1, 0);
  }
  countSpan.textContent = count;
}

function expandNote(el) {
  el.classList.toggle("expanded");
}

function updateProgressBar() {
  if (isPlayerReady && player && player.getDuration) {
    const currentTime = player.getCurrentTime();
    const duration = player.getDuration();
    const progressPercent = (currentTime / duration) * 100;
    const progressEl = document.querySelector(".progress");
    if (progressEl) {
      progressEl.style.width = `${progressPercent}%`;
    }
  }
}
