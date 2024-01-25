function playVideo(videoId) {
  document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${videoId}`;
  document.getElementById('videoPlayerModal').style.display = 'block';
}

function closeVideoPlayer() {
  document.getElementById('videoPlayerModal').style.display = 'none';
  document.getElementById('videoPlayer').src = '';
}

// Close modal on clicking outside the video player
window.onclick = function(event) {
  if (event.target === document.getElementById('videoPlayerModal')) {
      closeVideoPlayer();
  }
};
