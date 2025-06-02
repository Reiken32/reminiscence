
function toggleLike(el) {
  el.classList.toggle("liked");
  if (el.classList.contains("liked")) {
    el.textContent = "❤";
  } else {
    el.textContent = "♡";
  }
}

function expandNote(el) {
  el.classList.toggle("expanded");
}
