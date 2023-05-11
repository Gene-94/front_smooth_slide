const track_mouse = document.getElementById('track');

window.onmousedown = e => {
  
  track.dataset.mouseDownPosition = e.clientX;
}

window.onmouseup = () => {
  track.dataset.mouseDownPosition = "0";
  track.dataset.amountSlided = track.dataset.percentage;
}

window.onmousemove = e => {
  if(track.dataset.mouseDownPosition === "0") return;
  const mouseMove = parseFloat(track.dataset.mouseDownPosition)- e.clientX;
  maxMove = window.innerWidth / 2;

  const percentage = (mouseMove / maxMove) * -100;

  newPercentage = parseFloat(track.dataset.amountSlided) + percentage;
  newPercentage = Math.min(newPercentage, 0);
  newPercentage = Math.max(newPercentage, -100);
  track.dataset.percentage = newPercentage;

  track.animate({
    transform:`translate(${newPercentage}%, -50%)`
  }, {duration:1200, fill: "forwards"});
  for(const image of track.getElementsByClassName("image")){
    image.animate({
      objectPosition:`${newPercentage+100}% 50%`
    }, {duration:1200, fill: "forwards"});
  }
}