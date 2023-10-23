
function moveImage() {
x += xSpeed;
  y += ySpeed;


  if (x + img.width >= container.offsetWidth ||
     x <= 0)
  {
    xSpeed = -xSpeed;
    audio2.play();
    rndC(container);


  }


  if (y + img.height >= container.offsetHeight ||
      y <= 0)
  {

    ySpeed = -ySpeed;
    audio.play();
    rndC(container);

  }

img.style.left = x +'px';
  img.style.top = y +'px';
}


function rndC(element)
{
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);

  element.style.setProperty('background-color', `rgb(${r},${g},${b})`);
}


function setXSpeed(newValue)
{
  xSpeed = Math.abs(xSpeed) / xSpeed * newValue;
}

function setYSpeed(newValue)
{
  ySpeed = Math.abs(ySpeed) / ySpeed * newValue;
}


function resetInterval()
{
  clearInterval(intervalId);
  intervalId = setInterval(moveImage, Number(delay.value));
  updateFpsDisp();
}


function updateFpsDisp()
{
  fpsDisp.innerHTML = Math.floor(1000 / delay.value) + "fps";  
}

function mutePressed(){
audio.muted = !audio.muted;
audio2.muted = !audio2.muted; 
  if (audio.muted)
  {muteButton.src = 'mute.png';}
  else 
  {muteButton.src ='speaker.png';}

}
